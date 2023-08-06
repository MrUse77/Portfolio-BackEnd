const { userModel } = require("../models");
const { handleErrorResponse,handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const checkRol = (roles) => async(req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    const userData = await userModel.findById(tokenData._id);
    if (userData.roles=='admin') {
      next();
    } else {
      handleErrorResponse(res, "NOT_ROL", 409);
    }
  } catch (e) {
    handleHttpError(res, e);
  }
}

module.exports = checkRol;
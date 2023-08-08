const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validateCreateEducacion = [
  check("nameInstitution").exists().notEmpty(),
  check("Title").exists().notEmpty(),
  check("dateInit").isDate().exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  check("Type").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validateCreateEducacion };

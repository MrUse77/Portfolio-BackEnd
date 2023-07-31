const {check}=require('express-validator');
const validateResults = require('../utils/handleValidator');


const validateCreateExperiencia = [
  check("nameEnterprise").exists().notEmpty(),
  check("Description").exists().notEmpty(),
  check("dateInit").isDate().exists().notEmpty(),
  check("dateEnd").isDate().exists().notEmpty(),
  check("Type").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req,res,next) => {return validateResults(req,res,next)}
]

module.exports = { validateCreateExperiencia };
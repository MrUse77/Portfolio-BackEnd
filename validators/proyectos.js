const {check}=require('express-validator');
const validateResults = require('../utils/handleValidator');


const validateCreateProyectos = [
  check("nameProject").exists().notEmpty(),
  check("Description").exists().notEmpty(),
  check("date").isDate().exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req,res,next) => {return validateResults(req,res,next)}
]

module.exports = { validateCreateProyectos };
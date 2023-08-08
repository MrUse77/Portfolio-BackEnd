const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validateCreateExperiencia = [
  check("nameEnterprise").exists().notEmpty(),
  check("Description").exists().notEmpty(),
  check("dateInit").isDate().exists().notEmpty(),
  check("dateEnd").isDate(),
  check("Type").exists().notEmpty(),
  check("mediaId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validateCreateExperiencia };

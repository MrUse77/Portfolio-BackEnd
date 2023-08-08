const express = require("express");
const experienciaRouter = express.Router();
const checkAuth = require("../middleware/auth");
const checkRol = require("../middleware/rol");
const {
  createExperiencia,
  getExperiencia,
  editExperiencia,
  deleteExperiencia,
} = require("../controllers/experiencia");
const { validateCreateExperiencia } = require("../validators/experiencia");

experienciaRouter.post("/create", createExperiencia);
experienciaRouter.get("/get", getExperiencia);
experienciaRouter.put(
  "/update",
  checkAuth,
  checkRol(["admin"]),
  editExperiencia
);
experienciaRouter.delete(
  "/delete",
  checkAuth,
  checkRol(["admin"]),
  deleteExperiencia
);

module.exports = experienciaRouter;

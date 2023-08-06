const express = require("express");
const educacionRouter = express.Router();
const checkAuth = require("../middleware/auth");
const checkRol = require("../middleware/rol");
const { validateCreateEducacion } = require("../validators/educacion");
const {
  createEducacion,
  getEducacion,
  editEducacion,
  deleteEducacion,
} = require("../controllers/educacion");

educacionRouter.post("/create", createEducacion);
educacionRouter.get("/get", getEducacion);
educacionRouter.put("/update", checkAuth, checkRol(["admin"]), editEducacion);
educacionRouter.delete(
  "/delete",
  checkAuth,
  checkRol(["admin"]),
  deleteEducacion
);

module.exports = educacionRouter;

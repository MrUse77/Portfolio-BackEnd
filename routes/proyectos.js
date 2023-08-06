const express = require ("express")
const proyectosRouter = express.Router()
const { validateCreateProyectos } = require("../validators/proyectos")
const { createProyectos,getProyectos, editProyectos, deleteProyectos } = require("../controllers/proyectos")
const checkAuth = require("../middleware/auth")
const checkRol = require("../middleware/rol")

proyectosRouter.post("/create",validateCreateProyectos,checkAuth,checkRol(["admin"]), createProyectos)
proyectosRouter.get("/get",getProyectos)
proyectosRouter.put("/update",checkAuth,checkRol(["admin"]),editProyectos)
proyectosRouter.delete("/delete",checkAuth,checkRol(["admin"]),deleteProyectos)

module.exports = proyectosRouter

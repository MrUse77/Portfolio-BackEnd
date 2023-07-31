const express = require ("express")
const usersRouter = express.Router()
const {loginCtrl,registerCtrl} = require("../controllers/auth")

usersRouter.post("/register", registerCtrl)
usersRouter.post("/login", loginCtrl)

module.exports = usersRouter

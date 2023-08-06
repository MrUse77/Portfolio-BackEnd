const express = require ("express")
const storageRouter = express.Router()
const upload = require("../utils/handleStorage");
const { createFile } = require("../controllers/storage");

storageRouter.post("/create",upload.single("myfile"), createFile)

module.exports = storageRouter;
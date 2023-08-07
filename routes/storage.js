const express = require("express");
const storageRouter = express.Router();
const upload = require("../utils/handleStorage");
const { createFile, generatePublicUrl } = require("../controllers/storage");

storageRouter.post("/create", upload.single("myfile"), createFile);
storageRouter.get("/get", generatePublicUrl);

module.exports = storageRouter;

const fs = require("fs");
const { google } = require("googleapis");
const { storageModel } = require("../models");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const fileId = "17EtxEv40iW42eFmnKOnVHMasioN7KJNk";
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
const createFile = async (req, res) => {
  const { data } = await drive.files.create({
    media: {
      mimeType: req.file.mimeType,
      body: fs.createReadStream(req.file.path),
    },
    requestBody: {
      name: req.file.originalname,
      mimeType: req.file.mimeType,
      parents: [fileId],
    },
  });
  console.log(data.id);
  const img = storageModel.create({
    url: "https://drive.google.com/uc?export=view&id=" + data.id,
    filename: data.name,
  });
  res.send({ img });
};
const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});
async function generatePublicUrl(req, res) {
  try {
    const img = await storageModel.find();
    res.send({ img });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { createFile, generatePublicUrl };

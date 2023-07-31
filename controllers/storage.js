const storageModel = require('../models/nosql/storage');

const createFile = async (req, res) => {
  const filedata={
    filename: req.file.filename,
    url: `http://localhost:3001/${req.file.filename}`
  }
  const data= await storageModel.create(filedata)
  res.send({data})
}



module.exports = { createFile };
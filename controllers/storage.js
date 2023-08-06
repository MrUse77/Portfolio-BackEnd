const storageModel = require('../models/nosql/storage');

const createFile = async (req, res) => {
  const filedata={
    filename: req.file.filename,
    url: `https://portfolio-2-0-r1tx.onrender.com/${req.file.filename}`
  }
  const data= await storageModel.create(filedata)
  res.send({data})
}



module.exports = { createFile };

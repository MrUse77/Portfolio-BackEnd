const { proyectosModel } = require("../models");

const createProyectos =async (req, res) => {
    try {
        const createProyectos = proyectosModel.create({
          nameProject: req.body.nameProject,
          Description: req.body.Description,
          date: req.body.date,
          mediaId: req.body.mediaId,
    });
        res.send({createProyectos});
    } catch (e) {
        console.log(e);
    }
};

const getProyectos = async (req, res) => {
  try{
    const proyectos = await proyectosModel.find();
    res.send({proyectos});
  }
  catch(e){
    console.log(e)
  }
}

const editProyectos = async (req, res) => {
  try{
    const {_id}= req.params;
    const {
      nameProject,
      Description,
      date,
      mediaId,
    }=req.body;
    const proyectos = await proyectosModel.findByIdAndUpdate(
      _id,
      { $set: 
        {
          nameProject,
          Description,
          date,
          mediaId,
        }
      },
      {useFindAndModify: false}
    );
    res.send({proyectos});
  }
  catch(e){
    console.log(e)
  }
}
const deleteProyectos = async (req, res) => {
  try{
    const {_id}= req.params;
    const proyectos = await proyectosModel.findByIdAndDelete(_id);
    res.send("Deleted");
  }
  catch(e){
    console.log(e)
  }
}

module.exports = { createProyectos, getProyectos, editProyectos, deleteProyectos };
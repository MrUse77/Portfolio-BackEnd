const { proyectosModel } = require("../models");

const createProyectos = async (req, res) => {
  try {
    const date = () => {
      if (req.body.date) {
        new Date(req.body.date);
      }
    };
    const createProyectos = proyectosModel.create({
      nameProject: req.body.nameProject,
      Description: req.body.Description,
      date: date(),
      mediaId: req.body.mediaId,
      link: req.body.link,
    });
    await createProyectos.save();
    res.send({ createProyectos });
  } catch (e) {
    console.log(e);
  }
};

const getProyectos = async (req, res) => {
  try {
    const proyectos = await proyectosModel.find();
    res.send({ proyectos });
  } catch (e) {
    console.log(e);
  }
};

const editProyectos = async (req, res) => {
  try {
    const { _id } = req.params;
    const { nameProject, Description, date, mediaId } = req.body;
    const proyectos = await proyectosModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          nameProject,
          Description,
          date,
          mediaId,
        },
      },
      { useFindAndModify: false }
    );
    res.send({ proyectos });
  } catch (e) {
    console.log(e);
  }
};
const deleteProyectos = async (req, res) => {
  try {
    const { _id } = req.params;
    const proyectos = await proyectosModel.findByIdAndDelete(_id);
    res.send("Deleted");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createProyectos,
  getProyectos,
  editProyectos,
  deleteProyectos,
};

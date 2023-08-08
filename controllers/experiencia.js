const { experienciaModel } = require("../models");

const createExperiencia = async (req, res) => {
  const dateInit = new Date(req.body.dateInit);
  const dateEnd = () => {
    if (req.body.dateEnd) {
      new Date(req.body.dateEnd);
    }
  };
  try {
    const nuevaPersona = experienciaModel.create({
      nameEnterprise: req.body.nameEnterprise,
      Description: req.body.Description,
      dateInit: dateInit,
      dateEnd: dateEnd(),
      mediaId: req.body.mediaId,
      Type: req.body.Type,
    });
    res.send({ nuevaPersona });
  } catch (e) {
    console.log(e);
  }
};
const getExperiencia = async (req, res) => {
  try {
    const experiencia = await experienciaModel.find();
    res.send({ experiencia });
  } catch (e) {
    console.log(e);
  }
};
const editExperiencia = async (req, res) => {
  try {
    const { _id } = req.params;
    const { nameEnterprise, Description, dateInit, dateEnd, mediaId, Type } =
      req.body;
    const experiencia = await experienciaModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          nameEnterprise,
          Description,
          dateInit,
          dateEnd,
          mediaId,
          Type,
        },
      },
      { useFindAndModify: false }
    );
    res.send({ experiencia });
  } catch (e) {
    console.log(e);
  }
};
const deleteExperiencia = async (req, res) => {
  try {
    const { _id } = req.params;
    const experiencia = await experienciaModel.findByIdAndDelete(_id);
    res.send("Deleted");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createExperiencia,
  getExperiencia,
  editExperiencia,
  deleteExperiencia,
};

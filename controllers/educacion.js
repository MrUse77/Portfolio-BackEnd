const { educacionModel } = require("../models");

const createEducacion = async (req, res) => {
  try {
    const dateInit = new Date(req.body.dateInit);
    const dateEnd = () => {
      if (req.body.dateEnd) {
        new Date(req.body.dateEnd);
      }
    };
    const nuevaEducacion = educacionModel.create({
      nameInstitution: req.body.nameInstitution,
      Title: req.body.Title,
      dateInit: dateInit,
      dateEnd: dateEnd(),
      mediaId: req.body.mediaId,
      Type: req.body.Type,
    });
    res.send({ nuevaEducacion });
  } catch (e) {
    console.log(e);
  }
};
const getEducacion = async (req, res) => {
  try {
    const educacion = await educacionModel.find();
    res.send({ educacion });
  } catch (e) {
    console.log(e);
  }
};
const editEducacion = async (req, res) => {
  try {
    const { _id } = req.params;
    const { nameInstitution, title, dateInit, dateEnd, mediaId, Type } =
      req.body;
    const educacion = await educacionModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          nameInstitution,
          title,
          dateInit,
          dateEnd,
          mediaId,
          Type,
        },
      },
      { useFindAndModify: false }
    );
    res.send({ educacion });
  } catch (e) {
    console.log(e);
  }
};
const deleteEducacion = async (req, res) => {
  try {
    const { _id } = req.params;
    const educacion = await educacionModel.findByIdAndDelete(_id);
    res.send("Deleted");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createEducacion,
  getEducacion,
  editEducacion,
  deleteEducacion,
};

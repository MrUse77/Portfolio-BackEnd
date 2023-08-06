const mongoose = require("mongoose");
const EducacionScheme = new mongoose.Schema(
  {
    nameInstitution: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    Title: {
      type: String,
      //required: [true, "Description is required"],
    },
    dateInit: {
      type: Date,
      //required: [true, "Date is required"],
    },
    dateEnd: {
      type: Date,
      //required: [true, "Date is required"],
    },
    mediaId: { type: String, ref: "media" },
    Type: {
      type: ["Secundaria", "Universidad", "Cursos", "Otro"],
      //required: [true, "Type is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("educacion", EducacionScheme);

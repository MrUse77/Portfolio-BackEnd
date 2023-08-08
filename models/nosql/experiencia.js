const mongoose = require("mongoose");
const ExperienciaScheme = new mongoose.Schema(
  {
    nameEnterprise: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    Description: {
      type: String,
      required: [true, "Description is required"],
    },
    dateInit: {
      type: Date,
      required: [true, "Date is required"],
    },
    dateEnd: {
      type: Date,
      required: [false, "Date is required"],
    },
    Type: {
      type: [
        "Full Time",
        "Part Time",
        "Practicas Profesionalizantes",
        "Freelance",
        "Otro",
      ],
      required: [true, "Type is required"],
    },
    mediaId: { type: String, ref: "media" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("experiencia", ExperienciaScheme);

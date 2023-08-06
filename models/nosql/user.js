const mongoose = require("mongoose");
const UserScheme = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    gender: {
      type: ["male", "female"],
    },
    role: {
      type: ["admin", "user"],
      default: "user",
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("users", UserScheme);

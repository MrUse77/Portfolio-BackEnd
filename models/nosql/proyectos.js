const mongoose = require("mongoose");
const ProyectosScheme = new mongoose.Schema(
    {
        nameProject:{type: String, required: [true, "Name is required"],trim: true}, 
        Description: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        },
        mediaId:{type: mongoose.Types.ObjectId, ref: "media"}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = mongoose.model("proyectos", ProyectosScheme);
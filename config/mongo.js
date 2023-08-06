const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI =
    "mongodb+srv://MrUse:1120712@cluster0.sly6r5g.mongodb.net/portfolio?retryWrites=true&w=majority";
  mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB is Connected!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = dbConnect;

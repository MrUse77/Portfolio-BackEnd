const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI =""
    mongoose
    .connect(DB_URI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log('DB is Connected!');
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = dbConnect

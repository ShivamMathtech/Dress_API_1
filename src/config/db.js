const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/DressAPI")
  .then((connection) => {
    console.log(`DataBase is Conneced Successfully`);
  })
  .catch((error) => {
    console.error("Error Connecting to MongoDB", error);
  });

module.exports = {
  DB_CONNECTION: mongoose,
};

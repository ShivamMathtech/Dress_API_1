const { DB_CONNECTION } = require("../config/db");
let tshirtSchema = DB_CONNECTION.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  availability: {
    type: String,
    enmu: ["In Stock", "Out of Stock"],
    required: true,
  },
});

let Tshirt = DB_CONNECTION.model("Tshirt", tshirtSchema);
module.exports = {
  Tshirt,
};

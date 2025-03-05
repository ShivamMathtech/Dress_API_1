const { response } = require("express");
let Tshirt = require("../model/tshirtsModel");
let TshirtViewCtrls = (req, res) => {
  // Implementation of the view tshirts with specified name
  Tshirt.Tshirt.findOne({ id: req.params["id"] })
    .then((tshirt) => {
      if (tshirt) {
        res.status(200).json({
          message: "Tshirt Found",
          status_code: 200,
          data: tshirt,
        });
      } else {
        res.status(404).json({
          message: "Tshirt not Found",
          status_code: 404,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        status_code: 500,
        message: "Error Finding the burger",
      });
    });
};
module.exports = { TshirtViewCtrls };

const Tshirt = require("../model/tshirtsModel");
let ViewAllTshirt = (req, res) => {
  Tshirt.Tshirt.find()
    .then((result) => {
      res.status(200).json({
        msg: "ALL tshirt Related data",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "Ineternal Server Error",
        status_code: 500,
        err: err,
      });
    });
};

module.exports = {
  ViewAllTshirt,
};

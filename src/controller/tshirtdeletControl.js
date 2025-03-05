const { Tshirt } = require("../model/tshirtsModel");

const DeleteTshirt = (req, res) => {
  Tshirt.findOne({ id: req.params["id"] })
    .then((data) => {
      if (data) {
        Tshirt.deleteOne({ id: req.params["id"] }).then((reslut) => {
          res.status(200).json({
            msg: "data deleted",
            err: reslut,
          });
        });
      } else {
        res.status(404).json({
          msg: "Data not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        msg: "Internal Server Error",
        err: err,
      });
    });
};

module.exports = {
  DeleteTshirt,
};

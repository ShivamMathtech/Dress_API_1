const Tshirt = require("../model/tshirtsModel");
let UpdateTshirt = (req, res) => {
  Tshirt.Tshirt.updateOne(
    { id: req.params["id"] },
    { $set: { name: req.body.name } }
  )
    .then((data) => {
      res.status(200).json({
        msg: "data updated",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "internal server error",
        err: err,
      });
    });
};

module.exports = {
  UpdateTshirt,
};

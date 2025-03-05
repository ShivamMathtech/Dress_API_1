let Tshirt = require("../model/tshirtsModel");
let addTshirtCtrls = (req, res) => {
  Tshirt.Tshirt.findOne({ id: req.body.id })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Tshirt is alread exits",
          status_code: 409,
        });
      } else {
        let tshirt = new Tshirt.Tshirt(req.body);

        tshirt
          .save()
          .then((Tshirt) => {
            res.status(201).json({
              message: "Tshirt Added SuccessFully",
              data: Tshirt,
              status_code: 201,
            });
          })
          .catch((err) => {
            res.status(500).json({
              err: err.message,
              status_code: 500,
              message: "Server error",
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        status_code: 500,
        message: "Error Finding the Tshirt",
      });
    });
};

module.exports = {
  addTshirtCtrls,
};

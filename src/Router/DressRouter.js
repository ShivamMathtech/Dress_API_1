const express = require("express");
const { TshirtViewCtrls } = require("../controller/tshirtsViewCtrls");
const { addTshirtCtrls } = require("../controller/tshirtaddCtrls");
const { ViewAllTshirt } = require("../controller/tshirtViewAllCtrls");
const { UpdateTshirt } = require("../controller/Updatetshirt");
const { DeleteTshirt } = require("../controller/tshirtdeletControl");
const DressRouter = express.Router();
DressRouter.get("/dresses", ViewAllTshirt);
DressRouter.get("/dresses/:id", TshirtViewCtrls);
DressRouter.post("/dresses", addTshirtCtrls);
DressRouter.put("/dresses/:id", UpdateTshirt);
DressRouter.delete("/dresses/:id", DeleteTshirt);
module.exports = {
  DressRouter,
};

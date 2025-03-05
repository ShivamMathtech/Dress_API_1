const express = require("express");

const env = require("dotenv").config();
const app = express();
const { DressRouter } = require("./src/Router/DressRouter");
app.use(express.json());

app.use("/API", DressRouter);
const port = 3000 || process.env.PORT_NO;
app.listen(port, () => {
  ` Server is listening on Port no ${port}`;
});

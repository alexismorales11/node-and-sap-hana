require("dotenv").config();
const express = require("express");
const cors = require("cors");
const endpoints = require("./routes");

const app = express();

app.use(express.json());

app.use(cors());

endpoints(app);

app.listen(3010, () => {
  console.log("server listen in port 3001");
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const endpoints = require("./routes");
const corsHeader = require('./config/cors.header')
const app = express();

app.use(express.json());

//cors
app.use(cors());
corsHeader(app);

endpoints(app);

app.listen(3010, () => {
  console.log("server listen in port 3010");
});

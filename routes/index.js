const express = require("express");
const reportes = require('./reportes/reportes.routes')
function endpoints(app) {
  const router = express.Router();
  app.use("/api/v1/hana", router);
  router.use('/reportes', reportes)
}

module.exports = endpoints;

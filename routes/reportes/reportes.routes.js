const express = require("express");
const ReporteService = require("../../services/reportes/reportes.service");
const routes = express.Router();
const service = new ReporteService();

routes.get("/", async (req, res, next) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    console.error(error);
  }
});

module.exports = routes;

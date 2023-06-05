const connection = require("../../database/config");

class ReporteService {
  constructor() {}

  async find() {
    try {
      const query = `
      SELECT * FROM
      "SBODEMOGT"."OITM";
      `;
      const response = connection.exec(query);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id) {
    try {
      const query = `
      SELECT * FROM
      "SBODEMOGT"."OITM"
      WHERE "ItemCode" = ?;
      `;
      const parameters = [`${id}`];
      const response = connection.exec(query, parameters);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ReporteService;

const connection  = require("../../database/config");

class ReporteService {
  constructor() {}

  async find() {
    try {
      const query = `
      SELECT *FROM
      "SBODEMOGT"."OITM"
      WHERE "ItemCode" = ?;
      `;
      const parameters = ['7060'];
      const response = connection.exec(query, parameters);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ReporteService;

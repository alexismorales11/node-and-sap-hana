const hana = require("@sap/hana-client");

const connections = hana.createConnection();

const params = {
  //serverNode: "process.env.HOST:process.env.PORT",
  host: process.env.HOST,
  port: process.env.PORT,
  uid: process.env.UID,
  pwd: process.env.PASSWORD,
};

connections.connect(params);
module.exports = connections;

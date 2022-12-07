const http = require("http");
const app = require("./app");
const { loadData } = require("./models/transactions.model");

const server = http.createServer(app);

const startServer = () => {
  loadData();
  server.listen(5000, () => {
    console.log("server running on port 5000");
  });
};

startServer();

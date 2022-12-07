const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const transactionsRouter = require("./routes/transactions.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/transactions", transactionsRouter);

module.exports = app;

const express = require("express");
const {
  httpGetAllTransactions,
  httpSearchWalletAddress,
} = require("../controller/transactions.controller");

const transactionsRouter = express.Router();

transactionsRouter.get("/", httpGetAllTransactions);
transactionsRouter.get("/:walletAddress", httpSearchWalletAddress);

module.exports = transactionsRouter;

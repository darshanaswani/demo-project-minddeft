const {
  getAllTransactions,
  searchWalletAddress,
} = require("../models/transactions.model");
const LIMIT = 20;

const httpGetAllTransactions = (req, res) => {
  const data = getAllTransactions();
  const dataLength = data.length;
  const totalPages = dataLength / LIMIT;
  const SKIP = LIMIT * (req.query.page || 1);
  const resData = data.slice(SKIP, LIMIT + SKIP);
  const response = {
    transactionsData: resData,
    pagination: {
      totalCount: dataLength,
      pageLimit: LIMIT,
      totalPages: totalPages,
      currentPage: req.query.page || 1,
    },
  };

  return res.status(200).json(response);
};

const httpSearchWalletAddress = (req, res) => {
  return res.status(200).json(searchWalletAddress(req.params.walletAddress));
};

module.exports = {
  httpGetAllTransactions,
  httpSearchWalletAddress,
};

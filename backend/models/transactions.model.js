const XLSX = require("xlsx");
const path = require("path");
const workbook = XLSX.readFile(
  path.join(__dirname, "..", "assets", "Transactions.xlsx"),
  { cellDates: true, dateNF: "dd/mm/yy" }
);
let data = [];

const loadData = () => {
  data.push(XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]));
  data[0].sort((a, b) => {
    return b["Amount"] - a["Amount"];
  });
};

const searchWalletAddress = (walletAddress) => {
  const newArray = data[0].filter((obj) => {
    if (obj["Address"] === walletAddress) {
      return true;
    }
  });

  console.log(newArray);

  return newArray;
};

const getAllTransactions = () => {
  return data[0];
};

module.exports = { loadData, getAllTransactions, searchWalletAddress };

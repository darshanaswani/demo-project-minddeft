import { combineReducers } from "redux";
import { searchDataReducer } from "./searchData/searchData.reducer";
import { transactionsReducer } from "./transactions/transactions.reducer";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  searchData: searchDataReducer,
});

export default rootReducer;

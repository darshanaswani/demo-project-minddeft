import { createSelector } from "reselect";

export const selectTransactionsReducer = (state) => state.transactions.data;

export const selectIsTransactionsLoading = (state) =>
  state.transactions.isLoading;

export const selectTransactionsData = createSelector(
  [selectTransactionsReducer],
  (transactionObj) => {
    return transactionObj.transactionsData;
  }
);

export const selectPaginationData = createSelector(
  [selectTransactionsReducer],
  (transactionObj) => {
    return transactionObj.pagination;
  }
);

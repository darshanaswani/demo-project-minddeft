import { createSelector } from "reselect";

export const selectSearchDataReducer = (state) => state.searchData;

export const selectSearchDataIsLoading = (state) => state.searchData.isLoading;

export const selectSearchDataArray = createSelector(
  [selectSearchDataReducer],
  (obj) => obj.searchDataArray
);

export const selectTotalAmount = createSelector(
  [selectSearchDataArray],
  (arr) => {
    const AmountTotal = arr.reduce(
      (total, searchData) => total + searchData.Amount,
      0
    );

    return AmountTotal;
  }
);

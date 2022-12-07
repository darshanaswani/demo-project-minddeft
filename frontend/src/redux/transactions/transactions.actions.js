import { TRANSACTION_ACTION_TYPES } from "./transactions.types";
import { createActions } from "../../utils/createActions";

export const fetchTransactionsStart = () =>
  createActions(TRANSACTION_ACTION_TYPES.FETCH_TRANSACTIONS_START);

export const fetchTransactionsSuccess = (data) =>
  createActions(TRANSACTION_ACTION_TYPES.FETCH_TRANSACTIONS_SUCCESS, data);

export const fetchTransactionsError = (err) =>
  createActions(TRANSACTION_ACTION_TYPES.FETCH_TRANSACTIONS_ERROR, err);

export const fetchTransactionsAsync =
  (queryPage = { page: 1, limit: 20 }) =>
  async (dispatch) => {
    const { page, limit } = queryPage;
    try {
      dispatch(fetchTransactionsStart());
      const response = await fetch(
        `http://localhost:5000/api/transactions?page=${page}&limit=${limit}`
      );
      const data = await response.json();

      dispatch(fetchTransactionsSuccess(data));
    } catch (error) {
      dispatch(fetchTransactionsError(error));
    }
  };

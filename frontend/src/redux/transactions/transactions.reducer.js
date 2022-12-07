import { TRANSACTION_ACTION_TYPES } from "./transactions.types";
const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: null,
};

export const transactionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRANSACTION_ACTION_TYPES.FETCH_TRANSACTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case TRANSACTION_ACTION_TYPES.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case TRANSACTION_ACTION_TYPES.FETCH_TRANSACTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

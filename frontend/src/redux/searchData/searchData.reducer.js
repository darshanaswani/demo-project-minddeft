import { SEARCH_DATA_ACTION_TYPES } from "./searchData.types";
const INITIAL_STATE = {
  isLoading: false,
  searchDataArray: [],
  error: null,
};

export const searchDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_DATA_ACTION_TYPES.FETCH_SEARCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_DATA_ACTION_TYPES.FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchDataArray: action.payload,
      };
    case SEARCH_DATA_ACTION_TYPES.FETCH_SEARCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

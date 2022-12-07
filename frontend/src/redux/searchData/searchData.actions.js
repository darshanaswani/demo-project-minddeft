import { createActions } from "../../utils/createActions";
import { SEARCH_DATA_ACTION_TYPES } from "./searchData.types";

export const fetchSearchDataStart = () =>
  createActions(SEARCH_DATA_ACTION_TYPES.FETCH_SEARCH_DATA_START);

export const fetchSearchDataSuccess = (data) =>
  createActions(SEARCH_DATA_ACTION_TYPES.FETCH_SEARCH_DATA_SUCCESS, data);

export const fetchSearchDataError = (err) =>
  createActions(SEARCH_DATA_ACTION_TYPES.FETCH_SEARCH_DATA_ERROR, err);

export const fetchSearchDataAsync = (query) => async (dispatch) => {
  const { search, Navigate } = query;
  try {
    dispatch(fetchSearchDataStart());
    const response = await fetch(
      `http://localhost:5000/api/transactions/${search}`
    );
    const data = await response.json();

    dispatch(fetchSearchDataSuccess(data));
    Navigate("/search");
  } catch (error) {
    dispatch(fetchSearchDataError(error));
  }
};

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

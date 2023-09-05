import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { applyMiddleware } from "redux";
// Logger with default options
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger))
);

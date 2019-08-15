/**
 * Store
 * このアプリの状態管理データ
 */
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import rootReducers from "./reducer";

const logger = (createLogger as any)();
export default createStore(rootReducers, applyMiddleware(logger));

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionStart } from "./shop/shop.saga";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionStart);

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export { store, persistor };

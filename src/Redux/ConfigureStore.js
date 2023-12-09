/** @format */

import { createEpicMiddleware } from "redux-observable";
import { compose, createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import rootReducers from "./RootReducer";
import { RootEpic } from "./RootEpic";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware];

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["AuthReducer"],
};
const persistedReducer = (history) => persistReducer(persistConfig, rootReducers(history));

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : compose;
const initialState = {};
const store = createStore(
  persistedReducer(history),
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === "development" ? reduxDevTools : compose
  )
);
const persistor = persistStore(store);
epicMiddleware.run(RootEpic);
export { store, persistor };

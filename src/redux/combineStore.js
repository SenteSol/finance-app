import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./main.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middleware = [thunk];
export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);

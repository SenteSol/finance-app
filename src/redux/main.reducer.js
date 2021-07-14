import { combineReducers } from "redux";
import authReducer from "../apps/auth/auth.reducer";
import clientReducer from "../apps/clients/clients.reducer";

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer
});
export default mainReducer;

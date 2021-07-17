import { combineReducers } from "redux";
import authReducer from "../views/auth/auth.reducer";
import clientReducer from "../views/clients/clients.reducer";

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer
});
export default mainReducer;

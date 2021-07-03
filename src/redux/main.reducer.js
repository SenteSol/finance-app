import { combineReducers } from "redux";
import authReducer from "../apps/auth/auth.reducer";

const mainReducer = combineReducers({
  authentication: authReducer
});
export default mainReducer;

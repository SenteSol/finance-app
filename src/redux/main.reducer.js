import { combineReducers } from "redux";
import authReducer from "./reducers/auth.reducer";
import clientReducer from "./reducers/clients.reducer";
import loansReducer from "./reducers/loans.reducer";
import paymentsReducer from "./reducers/payments.reducer";
import tokenReducer from "./token/token.reducer";

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
  loans: loansReducer,
  payments: paymentsReducer,
  token: tokenReducer
});
export default mainReducer;

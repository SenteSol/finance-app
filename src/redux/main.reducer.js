import { combineReducers } from "redux";
import authReducer from "../views/auth/auth.reducer";
import clientReducer from "../views/clients/clients.reducer";
import loansReducer from "../views/loans/loans.reducer";
import paymentsReducer from "../views/payments/payments.reducer";

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
  loans: loansReducer,
  payments: paymentsReducer
});
export default mainReducer;

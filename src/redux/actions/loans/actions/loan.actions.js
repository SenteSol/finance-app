import { instance } from "../../../../config/client";

import { getLoansAction, addLoanAction, loanActionFailed } from "./loan.types";
import { loadingAction } from "../../loader/loading.actions";

export const getLoans = () => dispatch => {
  dispatch(loadingAction());
  instance
    .get("finance/manager/email")
    .then(res => {
      dispatch(getLoansAction(res.data));
    })
    .catch(err => {
      dispatch(loanActionFailed(err.response.data));
    });
};

export const addLoan = loanData => dispatch => {
  instance
    .post("finance", loanData)
    .then(res => {
      dispatch(addLoanAction(res.data));
    })
    .catch(err => {
      dispatch(loanActionFailed(err.response.data));
    });
};

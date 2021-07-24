import axios from "axios";
import { baseUrl } from "../../../config/baseUrl";

import { getLoansAction, addLoanAction, loanActionFailed } from "./loan.types";
import { loadingAction } from "../../../redux/loader/loading.actions";

export const getLoans = () => dispatch => {
  dispatch(loadingAction());
  axios
    .get(`${baseUrl}/finance/manager/email`)
    .then(res => {
      dispatch(getLoansAction(res.data));
    })
    .catch(err => {
      dispatch(loanActionFailed(err.response.data));
    });
};

export const addLoan = loanData => dispatch => {
  axios
    .post(`${baseUrl}/finance`, loanData)
    .then(res => {
      dispatch(addLoanAction(res.data));
    })
    .catch(err => {
      dispatch(loanActionFailed(err.response.data));
    });
};

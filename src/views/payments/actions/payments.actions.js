import { instance } from "../../../config/client";
import { getPaymentsAction, addPaymentAction, paymentActionFailed } from "./payments.types";
import { loadingAction } from "../../../redux/loader/loading.actions";

export const getPayments = id => dispatch => {
  dispatch(loadingAction());
  instance
    .get(`payment/loans/${id}`)
    .then(res => {
      dispatch(getPaymentsAction(res.data));
    })
    .catch(err => {
      dispatch(paymentActionFailed(err.response.data));
    });
};

export const addPayment = (loanData, id) => dispatch => {
  instance
    .post(`payment/${id}`, loanData)
    .then(res => {
      dispatch(addPaymentAction(res.data));
    })
    .catch(err => {
      dispatch(paymentActionFailed(err.response.data));
    });
};

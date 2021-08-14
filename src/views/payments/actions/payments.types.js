export const paymentActionTypes = {
  GET_ALL_PAYMENTS: "GET_ALL_PAYMENTS",
  ADD_A_PAYMENT: "ADD_A_PAYMENT",
  PAYMENT_REQUEST_FAILED: "PAYMENT_REQUEST_FAILED"
};

export const getPaymentsAction = payload => ({
  type: paymentActionTypes.GET_ALL_PAYMENTS,
  payload
});

export const addPaymentAction = payload => ({
  type: paymentActionTypes.ADD_A_PAYMENT,
  payload
});

export const paymentActionFailed = payload => ({
  type: paymentActionTypes.PAYMENT_REQUEST_FAILED,
  payload
});

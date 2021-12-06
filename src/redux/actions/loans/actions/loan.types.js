export const loanActionTypes = {
  GET_ALL_LOANS: "GET_ALL_LOANS",
  GET_LOAN: "GET_LOAN",
  ADD_A_LOAN: "ADD_A_LOAN",
  LOAN_REQUEST_FAILED: "LOAN_REQUEST_FAILED"
};

export const getLoansAction = payload => ({
  type: loanActionTypes.GET_ALL_LOANS,
  payload
});

export const getALoanAction = payload => ({
  type: loanActionTypes.GET_LOAN,
  payload
});

export const addLoanAction = payload => ({
  type: loanActionTypes.ADD_A_LOAN,
  payload
});

export const loanActionFailed = payload => ({
  type: loanActionTypes.LOAN_REQUEST_FAILED,
  payload
});

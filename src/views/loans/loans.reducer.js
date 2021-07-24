import { loanActionTypes } from "./actions/loan.types";

const initialState = {
  loans: [],
  loan: {},
  error: "",
  delete: false
};

const loansReducer = (state = initialState, action) => {
  switch (action.type) {
    case loanActionTypes.GET_ALL_LOANS:
      return {
        ...state,
        loans: action.payload,
        loan: {},
        error: {},
        delete: false
      };

    case loanActionTypes.GET_LOAN:
      return {
        ...state,
        loans: [],
        loan: action.payload,
        error: {},
        delete: false
      };
    case loanActionTypes.ADD_A_LOAN:
      return {
        ...state,
        loans: [],
        loan: action.payload,
        error: {},
        delete: false
      };
    default:
      return state;
  }
};

export default loansReducer;

import { loanActionTypes } from "./actions/loan.types";
import { loadingActions } from "../../redux/loader/loading.actions";

const initialState = {
  loans: [],
  loan: {},
  error: "",
  delete: false,
  loading: false
};

const loansReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingActions.LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case loanActionTypes.GET_ALL_LOANS:
      return {
        ...state,
        loans: action.payload,
        loan: {},
        error: {},
        loading: false,
        delete: false
      };

    case loanActionTypes.GET_LOAN:
      return {
        ...state,
        loans: [],
        loan: action.payload,
        error: {},
        loading: false,
        delete: false
      };
    case loanActionTypes.ADD_A_LOAN:
      return {
        ...state,
        loans: [],
        loan: action.payload,
        error: {},
        loading: false,
        delete: false
      };
    default:
      return state;
  }
};

export default loansReducer;

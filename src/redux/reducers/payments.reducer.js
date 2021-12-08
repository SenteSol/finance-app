import { paymentActionTypes } from "../actions/payments/actions/payments.types";
import { loadingActions } from "../actions/loader/loading.actions";

const initialState = {
  payments: [],
  payment: {},
  error: "",
  delete: false,
  loading: false
};

const paymentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingActions.LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case paymentActionTypes.GET_ALL_PAYMENTS:
      return {
        ...state,
        payments: action.payload,
        payment: {},
        error: {},
        loading: false,
        delete: false
      };

    case paymentActionTypes.ADD_A_PAYMENT:
      return {
        ...state,
        payments: [],
        payment: action.payload,
        error: {},
        loading: false,
        delete: false
      };
    default:
      return state;
  }
};

export default paymentsReducer;

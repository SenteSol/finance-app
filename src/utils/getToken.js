import jwt_decode from "jwt-decode";
import store from "../redux/combineStore";
import { loginUserAction } from "../redux/actions/auth/actions/auth.types";

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(loginUserAction(decoded));
  }
};

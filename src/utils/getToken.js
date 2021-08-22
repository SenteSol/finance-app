import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import store from "../redux/combineStore";
import { loginUserAction } from "../views/auth/actions/auth.types";

export const getTokenData = () => {
  const selector = useSelector(state => state?.token.bearer);
  if (selector) {
    const decoded = jwt_decode(selector);
    store.dispatch(loginUserAction(decoded));
  }
};

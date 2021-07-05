import React from "react";
import { Route } from "react-router-dom";
import LoginView from "../apps/auth/login";
import RegisterView from "../apps/auth/registration";

const Authentication = ({ match }) => (
  <div className="auth">
    <Route exact path={`${match.path}`} component={LoginView} />
    <Route exact path={`${match.path}register`} component={RegisterView} />
  </div>
);

export default Authentication;

import React from "react";
import { Route } from "react-router-dom";
import LoginView from "./login";
import RegisterView from "./registration";

const Authentication = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={LoginView} />
    <Route exact path={`${match.path}register`} component={RegisterView} />
  </div>
);

export default Authentication;

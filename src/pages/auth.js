import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import LoginView from "../views/auth/login";
import RegisterView from "../views/auth/registration";

const Authentication = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`} component={LoginView} />
      <Route exact path={`${path}register`} component={RegisterView} />
    </Switch>
  );
};

export default Authentication;

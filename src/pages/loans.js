import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import LoansView from "../views/loans/loansView";

const Loans = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={LoansView} />
    </Switch>
  );
};

export default Loans;

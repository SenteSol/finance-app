import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import GetLoansView from "../views/loans/get-loans-view";
import AddLoanView from "../views/loans/add-loans-view/add-loan-view";

const Loans = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={GetLoansView} />
      <Route path={`${path}/add-loan`} component={AddLoanView} />
    </Switch>
  );
};

export default Loans;

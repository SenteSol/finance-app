import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import GetPaymentsView from "../views/payments/get-payments-view";
import AddPaymentsView from "../views/payments/add-payments-view";

const Payments = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/:id`} component={GetPaymentsView} />
      <Route path={`${path}/add-payment/:id`} component={AddPaymentsView} />
    </Switch>
  );
};

export default Payments;

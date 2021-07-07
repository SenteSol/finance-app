import React from "react";
import { Route } from "react-router-dom";
import LoansView from "../apps/loans/loansView";

const Loans = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={LoansView} />
  </div>
);

export default Loans;

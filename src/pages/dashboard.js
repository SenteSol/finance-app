import React from "react";
import { Route } from "react-router-dom";
import DashboardView from "../apps/dashboard/dashboardView";

const DashBoard = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={DashboardView} />
  </div>
);

export default DashBoard;

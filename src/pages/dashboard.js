import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import DashboardView from "../views/dashboard/dashboardView";

const Dashboard = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={DashboardView} />
    </Switch>
  );
};

export default Dashboard;

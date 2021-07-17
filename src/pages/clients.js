import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import ClientsView from "../views/clients/get-clients-view";
import AddClientsView from "../views/clients/add-client-view/add-client-view";
import EditClientView from "../views/clients/edit-client-view";

const Clients = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={ClientsView} />
      <Route path={`${path}/add-client`} component={AddClientsView} />
      <Route path={`${path}/edit-client/:id`} component={EditClientView} />
    </Switch>
  );
};

export default Clients;

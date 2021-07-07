import React from "react";
import { Route } from "react-router-dom";
import ClientsView from "../apps/clients/clientsView";

const Clients = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ClientsView} />
  </div>
);

export default Clients;

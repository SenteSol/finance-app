import React from "react";
import { Route } from "react-router-dom";
import ClientsView from "../apps/clients/get-clients-view";

const Clients = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ClientsView} />
  </div>
);

export default Clients;

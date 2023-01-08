import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import store from "./redux/combineStore";
import Authentication from "./views/auth";
import Dashboard from "./pages/dashboard";
import Loans from "./pages/loans";
import Payments from "./pages/payments";
import Clients from "./pages/clients";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/clients" component={Clients} />
            <Route path="/loans" component={Loans} />
            <Route path="/payments" component={Payments} />
            <Route path="/" component={Authentication} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

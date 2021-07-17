import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SnackbarProvider from "react-simple-snackbar";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { persistor, store } from "./redux/combineStore";
import Authentication from "./views/auth";
import DashboardView from "./views/dashboard/dashboardView";
import ClientsView from "./views/clients/get-clients-view";
import LoansView from "./views/loans/loansView";
import AddClientView from "./views/clients/add-client-view/add-client-view";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "Roboto"].join(",")
  }
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Router>
              <Switch>
                <Route exact path="/dashboard" component={DashboardView} />
                <Route exact path="/clients" component={ClientsView} />
                <Route exact path="/clients/add-client" component={AddClientView} />
                <Route exact path="/loans" component={LoansView} />
                <Route path="/" component={Authentication} />
              </Switch>
            </Router>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

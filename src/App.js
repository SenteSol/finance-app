import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SnackbarProvider from "react-simple-snackbar";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { persistor, store } from "./redux/combineStore";
import Authentication from "./views/auth";
import Dashboard from "./pages/dashboard";
import Loans from "./pages/loans";
import Clients from "./pages/clients";

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
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/clients" component={Clients} />
                <Route path="/loans" component={Loans} />
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

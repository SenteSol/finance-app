import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import { Provider } from "react-redux";
import store from "./redux/combineStore";
import Authentication from "./pages/auth";

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Router>
          <Switch>
            <Route path="/" component={Authentication} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;

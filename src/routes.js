import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./welcomePage";
import RegisteredPage from './registeredPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/registered" component={RegisteredPage} />
      </Switch>
    </Router>
  );
}

export default Routes;

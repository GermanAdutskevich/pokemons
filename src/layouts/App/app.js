import React from "react";
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "../Welcome/welcome";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="" component={Welcome}/>
        </Switch>
    </Router>
  )
}

export default App;

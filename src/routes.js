import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./config/history";
import Portal from "./views/portal";

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Portal} />
      </Switch>
    </Router>
  );
};

export default Routers;

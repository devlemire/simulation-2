import React from "react";
import { Switch, Route } from "react-router-dom";

import App from '../components/App';
import Login from '../components/Login/Login';
import Wizard from '../components/Wizard/Wizard';

export default (
  <Switch>
    <Route component={ App } path="/" exact />
    <Route component={ Login } path="/login" />
    <Route component={ Wizard } path="/wizard" />
  </Switch>
)
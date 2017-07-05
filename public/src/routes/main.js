import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from '../components/Login/Login';
import Wizard from '../components/Wizard/Wizard';

export default (
  <Switch>
    <Route component={ Login } path="/login" />
    <Route component={ Wizard } path="/wizard" />
  </Switch>
)
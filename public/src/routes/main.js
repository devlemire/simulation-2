import React from "react";
import { Switch, Route } from "react-router-dom";

// import App from '../components/App';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Dashboard from '../components/Dashboard/Dashboard';
import Wizard from '../components/Wizard/Wizard';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
    <Route component={ Login } path="/login" />
    <Route component={ Register } path="/register" />
    <Route component={ Dashboard } path="/dashboard" />
    <Route component={ Wizard } path="/wizard" />
  </Switch>
)
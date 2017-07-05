import React from "react";
import { Switch, Route } from "react-router-dom";

import Step1 from '../components/Wizard/Step1/Step1';
import Step2 from '../components/Wizard/Step2/Step2';

export default (
  <Switch>
    <Route component={ Step1 } path="/wizard/step1" />
    <Route component={ Step2 } path="/wizard/step2" />
  </Switch>
)
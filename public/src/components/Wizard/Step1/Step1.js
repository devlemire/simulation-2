import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Step1 extends Component {
  render() {
    return (
      <div>
        <p>Step 1 here</p>

        <p>questions and inputs will go here</p>

        <Link to="/wizard/step2">
          Next Step
        </Link>
      </div>
    )
  }
}
import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Step2 extends Component {
  render() {
    return (
      <div>
        <p>Step 2 here</p>

        <p>questions and inputs will go here</p>

        <Link to="/wizard/step1">
          Previous Step
        </Link>

        <Link to="/wizard/step3">
          Next Step
        </Link>
      </div>
    )
  }
}
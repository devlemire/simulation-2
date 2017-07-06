import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Step3 extends Component {
  render() {
    return (
      <div>
        <p>Step 3 here</p>

        <p>questions and inputs will go here</p>

        <Link to="/wizard/step2">
          Previous Step
        </Link>

        <Link to="/wizard/step4">
          Next Step
        </Link>
      </div>
    )
  }
}
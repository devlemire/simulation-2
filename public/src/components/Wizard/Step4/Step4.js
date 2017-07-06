import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Step4 extends Component {
  render() {
    return (
      <div>
        <p>Step 4 here</p>

        <p>questions and inputs will go here</p>

        <Link to="/wizard/step3">
          Previous Step
        </Link>

        <Link to="/wizard/step5">
          Next Step
        </Link>
      </div>
    )
  }
}
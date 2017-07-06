import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Step5 extends Component {
  render() {
    return (
      <div>
        <p>Step 5 here</p>

        <p>questions and inputs will go here</p>

        <Link to="/wizard/step4">
          Previous Step
        </Link>

        <Link to="/dashboard">
          Create
        </Link>
      </div>
    )
  }
}
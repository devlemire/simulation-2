import React, { Component } from "react";
import Filter from "./Filter/Filter";

import { logout } from "../../ducks/reducer";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { history, logout } = this.props;
    return (
      <div>
        <p> Dashboard here </p>
        <Filter />
        <br />
        <br />
        <br />
        <br />
        <button onClick={ () => logout( history ) }> Logout </button>
      </div>
    )
  }
}

export default connect( state => state, { logout } )( Dashboard );
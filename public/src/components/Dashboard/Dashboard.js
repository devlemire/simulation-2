import React, { Component } from "react";
import Filter from "./Filter/Filter";

import { Link } from "react-router-dom";
import { logout, getProperties, deleteProperty } from "../../ducks/reducer";
import { connect } from "react-redux";

import Property from './Property/Property';

class Dashboard extends Component {
  componentDidMount() {
    const { getProperties } = this.props;
    getProperties();
  }

  render() {
    const { history, logout, properties, deleteProperty } = this.props;
    console.log('PROPS:', this.props);

    const propertyComponents = properties.map( prop => (
      <Property
        key={ prop.propertyid }
        id={ prop.propertyid }
        address={ prop.address }
        city={ prop.city }
        description={ prop.description }
        desired_rent={ prop.desiredrent }
        image={ prop.image }
        loan={ prop.loan }
        monthly_mortgage={ prop.monthlymortgage }
        name={ prop.name }
        recommended_rent={ prop.recommendedrent }
        state={ prop.state }
        zip={ prop.state }
        deleteProperty={ deleteProperty }
      />
    ));

    return (
      <div>
        <p> Dashboard here </p>

        <Link to="/wizard/step1">
          <button>Add new property</button>
        </Link>

        <Filter />

        <br />
        <br />
        <br />

        { propertyComponents }

        <br />
        <br />
        <br />
        <br />
        <button onClick={ () => logout( history ) }> Logout </button>
      </div>
    )
  }
}

export default connect( state => ({ user: state.user, properties: state.properties }), { logout, getProperties, deleteProperty } )( Dashboard );
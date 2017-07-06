import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <span>Username:</span>
        <input value={ username } onChange={ (e) => this.handleChange('username', e.target.value) } />
        <br />
        <span>Password:</span>
        <input value={ password } type="password" onChange={ (e) => this.handleChange('password', e.target.value) } />
        <br />
        <br />
        <button>Login</button>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    )
  }
}
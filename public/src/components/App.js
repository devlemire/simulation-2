import React, { Component } from 'react';
import './App.css';

import router from '../routes/main';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        App

        <Link to="/wizard/step1">
          Create a new property
        </Link>
        { router }
      </div>
    );
  }
}

export default App;

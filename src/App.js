import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pokemons from './containers/list-container';
import Pokemon from './containers/list-item-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokemon search</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactLogo from './react.svg';
import CordovaLogo from './cordova.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logos">
            <img className="App-logo" src={CordovaLogo} alt="Cordova logo"/>
            +
            <img className="App-logo" src={ReactLogo} alt="React logo"/>
          </div>
          <p>Cordova + React Boilerplate</p>
        </header>
      </div>
    );
  }
}

export default App;

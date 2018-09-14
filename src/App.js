import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';

import Container from "./Container.js";

class App extends Component {
  
  render() {  
    return (
      <Router>
        <div className="App">
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;

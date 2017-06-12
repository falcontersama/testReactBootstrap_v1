import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';

class App extends Component {


  render() {
    return(
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <Button bsStyle="primary" bsSize="large">Large button</Button>
        <Button bsSize="large">Large button</Button>
      </div>
    )
  }
}

export default App;

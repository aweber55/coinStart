import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="bodyOne">
      <Nav/>
     

      <div className="App">
      {/* <Row> */}
        <header className="App-header">
        {/* <Col size="md-12"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* </Col> */}
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button type="button" className="btn btn-danger">Primary</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Change your currency
          </a>
         <a href="/Home">home</a>
        </header>
        {/* </Row> */}
      </div>
      </div>
    );
  }
}

export default App;

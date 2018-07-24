import React, { Component } from 'react';
import "./App.css";
import "react-table/react-table.css";

import { Navigation } from "./navigation/navigation.jsx";
import { HomePage } from "./pages/homepage/homepage.jsx";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col xs={6} sm={4} md={1} lg={1} >
            <Navigation />
          </Col>
          <Col xs={6} sm={8} md={10} lg={10}>
            <HomePage />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

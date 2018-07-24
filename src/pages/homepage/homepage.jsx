import React from "react";
import { Tweets } from "./components/tweets.jsx";
import { Analyst } from "./components/analyst.jsx";
import { Summary } from "./components/summary.jsx";
import { News } from "./components/news.jsx";
import { Row, Col } from "react-bootstrap";
//import { BigQueryAPI } from "../../data/big-query-api";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="main">
        <Row className="row">
          <Col xs={6}>
            <Tweets />
          </Col>
          <Col xs={6}>
            <Analyst />
          </Col>
        </Row>
        <Row className="row">
          <Col xs={6}>
            <Summary />
          </Col>
          <Col xs={6}>
            <News />
          </Col>
        </Row>
      </div>
    );
  }
}

import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { Button, Glyphicon } from 'react-bootstrap';
import "./css/menu.css";

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.onHomePageSelected = this.onHomePageSelected.bind(this);
    this.onMarketsSelected = this.onMarketsSelected.bind(this);
    this.onFundamentalsSelected = this.onFundamentalsSelected.bind(this);
    this.state = {
      pageSelected: "home"
    };
  }
  onHomePageSelected() {
    this.setState({
      pageSelected: "home"
    });
  }
  onMarketsSelected() {
    this.setState({
      pageSelected: "analyst"
    });
  }
  onFundamentalsSelected() {
    this.setState({
      pageSelected: "fundamentals"
    });
  }
  render() {
    return (
      <Menu width={195}>
      <Button bsSize="large" 
        className="bm-menu-button"
        active={this.state.pageSelected === "home"}
        >
        <Glyphicon glyph="home" /> Homepage
      </Button>
      <Button bsSize="large"
        className="bm-menu-button"
        active={this.state.pageSelected === "analyst"}
        >
        <Glyphicon glyph="list-alt" /> Analyst
      </Button>
      <Button bsSize="large"
        className="bm-menu-button"
        active={this.state.pageSelected === "fundamentals"}
        >
        <Glyphicon glyph="tasks" /> Fundamentals
      </Button>
      </Menu>
    );
  }
}





import React, { Component } from "react";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    return (
      <div>
        <Navigation title={this.props.title} />
        <h1 className="header">Write whatever:</h1>
      </div>
    );
  }
}

export default Header;

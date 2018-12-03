import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#Nav">
            Nav
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#Home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Something-else">
                  Something else
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              {this.props.title || "=> Text goes in here"}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import Header from "./Header";
import Settings from "./Settings";

class App extends Component {
  handleChange = e => {
    const text = e.target.value.trim();
    this.setTitle(text);
  };

  setTitle = newTitle => {
    this.setState(state => {
      state.content.title = newTitle;
      console.log(state);
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <Header title={this.state.content.title} />
        <Settings handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;

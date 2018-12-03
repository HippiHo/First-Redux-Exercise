import React, { Component } from "react";
import { connect } from "react-redux";

class Settings extends Component {
  render() {
    return (
      <div>
        <img
          src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Writing hand"
          width="400"
          className="rounded mx-auto d-block"
        />
        <input
          type="text"
          className="form-control mx-auto"
          placeholder="Input to change text in Nav"
          aria-describedby="button-addon2"
          onChange={this.props.typeText}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.title
});

const mapDispatchToProps = dispatch => ({
  typeText: () => dispatch({ type: "TYPE_TEXT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

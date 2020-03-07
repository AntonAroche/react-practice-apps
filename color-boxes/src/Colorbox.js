import React, { Component } from "react";
import "./Colorbox.css";

class Colorbox extends Component {
  static defaultProps = {
    color: "purple"
  };

  handleChangeColor = () => {
    this.props.changeColor(this.props.index);
  };

  render() {
    return (
      <div
        className="Colorbox"
        onClick={this.handleChangeColor}
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}

export default Colorbox;

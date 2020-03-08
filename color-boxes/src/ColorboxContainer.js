import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./ColorboxContainer.css";

const colors = [
  "red",
  "blue",
  "green",
  "teal",
  "orange",
  "purple",
  "slateblue",
  "lightgreen"
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

class ColorboxContainer extends Component {
  static defaultProps = {
    numBoxes: 18
  };

  state = {
    colors: Array.from({ length: this.props.numBoxes }).map(() => randomColor())
  };

  changeColor = index => {
    this.setState({
      colors: this.state.colors.map((c, i) => {
        if (i === index) {
          c = randomColor();
        }
        return c;
      })
    });
  };

  render() {
    return (
      <div className="ColorboxContainer">
        {this.state.colors.map((c, i) => (
          <Colorbox color={c} ={i} changeColor={this.changeColor} />
        ))}
      </div>
    );
  }
}

export default ColorboxContainer;

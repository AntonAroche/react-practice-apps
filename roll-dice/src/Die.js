import React, { Component } from "react";
import "./Die.css";

function getWrittenNum (num) {
    switch (num) {
        case (6): {
            return "six";
        }
        case (5): {
            return "five";
        }
        case (4): {
            return "four";
        }
        case (3): {
            return "three";
        }
        case (2): {
            return "two";
        }
        default: {
            return "one";
        }
    }
}
class Die extends Component {
  static defaultProps = {
    diceNum: 1
  };
  render() {
    return <i className="Die" class={`fas fa-dice-${getWrittenNum(this.props.diceNum)}`}></i>;
  }
}

export default Die;

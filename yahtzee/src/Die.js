import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  getIcon() {
    switch (this.props.val) {
      case 1: {
        return <i class="fas fa-dice-one" />;
      }
      case 2: {
        return <i class="fas fa-dice-two" />;
      }
      case 3: {
        return <i class="fas fa-dice-three" />;
      }
      case 4: {
        return <i class="fas fa-dice-four" />;
      }
      case 5: {
        return <i class="fas fa-dice-five" />;
      }
      case 6: {
        return <i class="fas fa-dice-six" />;
      }
      default: {
        return <i class="fas fa-question-circle" />;
      }
    }
  }

  handleClick = () => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.getIcon()}
      </button>
    );
  }
}

export default Die;

import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  state = {
    dieOne: 1,
    dieTwo: 2,
    rolling: false
  };

  roll = e => {
    this.setState({
      dieOne: Math.ceil(Math.random() * 6),
      dieTwo: Math.ceil(Math.random() * 6),
      rolling: true
    });

    //Sets the button to rolling during the animation
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die dieNum={this.state.dieOne} rolling={this.state.rolling}/>
          <Die dieNum={this.state.dieTwo} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;

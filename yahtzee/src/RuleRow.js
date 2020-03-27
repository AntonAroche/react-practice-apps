import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let score = this.props.score;
    let rowType;

    if (score) {
      rowType = "RuleRow-disabled";
    } else {
      rowType = "RuleRow-active";
    }

    return (
      <tr
        className={`RuleRow ${rowType}`}
        onClick={score ? undefined : this.props.doScore}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    );
  }
}

export default RuleRow;

import React, { Component } from "react";

class Card extends Component {
  render() {
    return <img className="Card" src={this.props.imgSrc} alt={this.props.alt} />;
  }
}

export default Card;

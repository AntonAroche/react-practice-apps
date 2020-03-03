import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { name, id, type, base_experience } = this.props;
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    console.log(imageSrc)

    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{name}</p>
        <img className="Pokecard-image" src={imageSrc} alt={name}/>
        <p className="Pokecard-type"> Type: {type}</p>
        <p className="Pokecard-exp">EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard
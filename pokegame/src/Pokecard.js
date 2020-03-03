import React, { Component } from "react";
import "./Pokecard.css";

/**
 * Gets a pretty image source directly from Pokemon's assets.
 * Has to be padded with zeros to 3 places.
 * @param {Integer} id 
 */
function generateSource(id) {
    let convertedId
    if (id < 10) {
        convertedId = `00${id}`
    }
    else {
        convertedId = (id < 100) ? `0${id}` : id
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${convertedId}.png`
}


class Pokecard extends Component {
  render() {
    const { name, id, type, base_experience } = this.props;

    return (
      <div className="Pokecard">
        <img className="Pokecard-image" src={generateSource(id)} alt={name}/>
        <p className="Pokecard-name">{name}</p>
        <p className="Pokecard-type"> Type: {type}</p>
        <p className="Pokecard-exp">EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard
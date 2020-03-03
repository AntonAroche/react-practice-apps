import React, { Component } from "react";
import Pokedex from "./Pokedex";

/**
 * Returns two pokedexes, each with a randomized half of the pokemon, and determines the winners.
 * @param {Array} pokemon
 */
function getPokeDexes(pokemon) {
  if (pokemon.length % 2 != 0) {
    pokemon.pop();
  }

  for (let i = pokemon.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = pokemon[i];
    pokemon[i] = pokemon[j];
    pokemon[j] = temp;
  }

  const hand1 = pokemon.splice(0, pokemon.length / 2)
  const hand2 = pokemon

  const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  const hand1Won = exp1 >= exp2 //Hand one wins ties because they go first! 

  return [
    <Pokedex pokemon={hand1} totalExp={exp1} hasWon={hand1Won}/>,
    <Pokedex pokemon={hand2} totalExp={exp2} hasWon={!hand1Won}/>
    ];
}

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  render() {
    const dexes = getPokeDexes(this.props.pokemon)

    return (
        <div className="Pokegame">
            <div className="Dex1">{dexes[0]}</div>
            <div className="Pokegame-dex2">{dexes[1]}</div>
        </div>
    )
  }
}

export default Pokegame;

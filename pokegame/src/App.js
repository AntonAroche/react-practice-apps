import React from 'react';
import './App.css';
import Pokecard from './Pokecard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Pokedex
      </header>
      <div className="App-main">
        <Pokecard id={4} name="Charmander" type="Fire" base_experience={62}/>
      </div>
    </div>
  );
}

export default App;

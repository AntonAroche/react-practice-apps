import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Die from "./Die";

function App() {
  return (
    <div className="App">
      <Die />
      <Die diceNum={5} />
    </div>
  );
}

export default App;

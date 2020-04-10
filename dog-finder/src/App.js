import React, { Component } from "react";
import Routes from "./Routes"
import Navbar from "./Navbar"
import "./App.css";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import ollie from "./images/ollie.jpeg";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
      {
        name: "Ollie",
        age: 10,
        src: ollie,
        facts: [
          "Ollie has mastered many tricks.",
          "Ollie loves to take naps.",
          "Ollie is always happy to see you!",
        ],
      },
    ],
  };

  render() {
    const { dogs } = this.props;
    return (
      <div className="App">
        <Navbar dogs={dogs}/>
        <div className="container">
        <Routes dogs={dogs}/>
        </div>
      </div>
    );
  }
}

export default App;

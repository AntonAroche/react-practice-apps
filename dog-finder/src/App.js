import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import ollie from "./images/ollie.jpeg";
import Dog from "./Dog";
import DogList from "./DogList";

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
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <Dog {...props} dog={currentDog} />
    };

    return (
      <div className="App">
        <Switch>
          <Route exact path="/dogs/:name" render={getDog} />
          <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;

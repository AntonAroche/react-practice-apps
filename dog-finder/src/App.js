import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import ollie from "./images/ollie.jpeg";
import Dog from './Dog.js'

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
    const dogRoutes = this.props.dogs.map((d) => {
      return <Route path={`/dogs/${d.name}`} render={() => <Dog dog={d}/>} />;
    });

    return (
      <div className="App">
        <Switch>
          {dogRoutes}
          <Route path="/dogs" render={() => <h1>Dogs!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;

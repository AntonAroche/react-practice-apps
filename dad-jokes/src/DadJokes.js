import React, { Component } from "react";
import axios from "axios";

const jokeUrl = "https://icanhazdadjoke.com/";

class DadJokes extends Component {
  state = {
    jokes: []
  };

  async componentDidMount() {}

  getJokes = () => {
    axios
      .get(jokeUrl, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        const joke = {
            id: response.data.id,
            jokeText: response.data.joke
        }
        this.setState(state => {
          return {
            jokes: state.jokes.concat(joke)
          }
        })
        console.log(this.state);
      });
  };

  render() {
    const jokes = this.state.jokes.map(joke => <p>{joke.jokeText}</p>);

    return (
      <div className="DadJokes">
        <h1>Dad Jokes</h1>
        <button className="DadJokes-btn" onClick={this.getJokes}>
          Get a joke
        </button>
        {jokes}
      </div>
    );
  }
}

export default DadJokes;

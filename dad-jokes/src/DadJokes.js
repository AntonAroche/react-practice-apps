import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./DadJokes.css";

const jokeUrl = "https://icanhazdadjoke.com/";

class DadJokes extends Component {
  constructor(props) {
    super(props);
    this.getJokes = this.getJokes.bind(this);
  }

  static defaultProps = {
    numJokesToGet: 10,
  };

  state = {
    jokes: [],
  };

  async componentDidMount() {
    this.getJokes();
  }

  async getJokes() {
    let retrievedJokes = [];
    while (retrievedJokes.length < this.props.numJokesToGet) {
      let response = await axios.get(jokeUrl, {
        headers: { Accept: "application/json" },
      });
      retrievedJokes.push({
        joke: response.data.joke,
        id: response.data.id,
        votes: 0,
      });
    }
    this.setState({
      jokes: retrievedJokes,
    });
  }

  handleVote = (jokeId, delta) => {
    this.setState({
      jokes: this.state.jokes.map((j) => {
        return j.id === jokeId ? { ...j, votes: j.votes + delta } : j;
      }),
    });
  };

  render() {
    const jokes = this.state.jokes.map((j) => (
      <Joke
        jokeText={j.joke}
        key={j.id}
        votes={j.votes}
        id={j.id}
        handleVote={this.handleVote}
      />
    ));

    return (
      <div className="DadJokes">
        <div className="DadJokes-sidebar">
          <h1 className="DadJokes-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="laughing-emoji"
          />
          <button className="DadJokes-btn" onClick={this.getJokes}>
            New Jokes
          </button>
        </div>
        <div className="DadJokes-jokes">{jokes}</div>
      </div>
    );
  }
}

export default DadJokes;

import React, { Component } from "react";
import './Joke.css'

class Joke extends Component {
  handleUpvote = () => {
      this.props.handleVote(this.props.id, 1)
  }
  
  handleDownvote = () => {
      this.props.handleVote(this.props.id, -1)
  }

  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up" onClick={this.handleUpvote}/>
          <span className="Joke-votes">{this.props.votes}</span>
          <i className="fas fa-arrow-down" onClick={this.handleDownvote}/>
        </div>
        <div className="Joke-text">
          <p>{this.props.jokeText}</p>
        </div>
        <div className="Joke-smiley">
            <i class='em em-rolling_on_the_floor_laughing' />
        </div>
      </div>
    );
  }
}

export default Joke;

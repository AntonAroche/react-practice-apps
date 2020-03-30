import React, { Component } from "react";
import axios from "axios";
import "./Deck.css";
import Card from "./Card";

const newDeckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/";

class Deck extends Component {
  state = {
    deckId: "",
    emptyDeck: false,
    cards: []
  };
  async componentDidMount() {
    const response = await axios.get(newDeckUrl);

    this.setState({
      deckId: response.data.deck_id
    });
  }

  drawCard = () => {
    const newCardUrl = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;

    axios.get(newCardUrl).then(response => {
      const card = response.data.cards[0];
      const emptyDeck = response.data.remaining === 0;

      this.setState(state => {
        return {
          emptyDeck: emptyDeck,
          cards: state.cards.concat(card)
        };
      });
    });
  };

  generateCards() {
    return this.state.cards.map(card => (
      <Card
        imgSrc={card.image}
        key={card.code}
        alt={`${card.value} OF ${card.suit}`}
      />
    ));
  }

  render() {
    return (
      <div className="Deck">
        <button
          className="Deck-Button"
          onClick={this.drawCard}
          disabled={this.state.emptyDeck}
        >
          Draw a card!
        </button>
        {this.generateCards()}
      </div>
    );
  }
}

export default Deck;

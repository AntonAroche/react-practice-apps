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

    if (!this.state.emptyDeck) {
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
    }
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
    const disabled = this.state.emptyDeck;
    return (
      <div className="Deck">
        <h1 className="Deck-title">♦ Card Dealer ♦</h1>
        <button
          className={disabled ? "Deck-btn-disabled" : "Deck-btn"}
          onClick={this.drawCard}
          disabled={disabled}
        >
          {disabled ? "Out of cards" : "Draw a card!"}
        </button>
        <div className="Deck-cards">{this.generateCards()}</div>
      </div>
    );
  }
}

export default Deck;

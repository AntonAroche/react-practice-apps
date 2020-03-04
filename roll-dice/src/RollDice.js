import React, { Component } from 'react';
import Die from './Die';


class RollDice extends Component {
    state = { 
        dieOne: 1,
        dieTwo: 2 
    }

    roll = e => {
        this.setState({ 
            dieOne: Math.ceil(Math.random() * 6),
            dieTwo: Math.ceil(Math.random() * 6)
        })
    }

    render() { 
        return ( 
            <div className="RollDice">
                <Die dieNum={this.state.dieOne} />
                <Die dieNum={this.state.dieTwo} />
                <button onClick={this.roll} className="RollDice-button">Roll Dice!</button>
            </div>
        );
    }
}
 
export default RollDice;
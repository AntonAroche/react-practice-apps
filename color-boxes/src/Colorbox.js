import React, { Component } from 'react';
import './Colorbox.css';

const colours = [
    'red', 'blue', 'green', 'teal', 'orange', 'purple', 'slateblue', 'lightgreen'
]

function randomColor() {
    return colours[(Math.floor(Math.random() * colours.length))]
}

class Colorbox extends Component {
    state = { color: randomColor() }

    setRandomColour = e => {
        let newColor
        do {
            newColor = randomColor() 
        } while (newColor === this.state.color)
        
        this.setState({color: newColor})
    }

    render() { 
        return ( 
            <div className="Colorbox" onClick={this.setRandomColour} style={{backgroundColor: this.state.color}}>
            </div>
         );
    }
}
 
export default Colorbox;
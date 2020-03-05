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

    render() { 
        return ( 
            <div className="Colorbox" style={{backgroundColor: this.state.color}}>
            </div>
         );
    }
}
 
export default Colorbox;
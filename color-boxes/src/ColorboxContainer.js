import React, { Component } from 'react';
import Colorbox from './Colorbox';
import './ColorboxContainer.css'

class ColorboxContainer extends Component {
    static defaultProps = {
        numBoxes: 18
    }
    state = {  }

    render() { 
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
            <Colorbox />
        ))

        return ( 
            <div className="ColorboxContainer">
                {boxes}
            </div>
         );
    }
}
 
export default ColorboxContainer;
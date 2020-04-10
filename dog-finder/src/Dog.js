import React, { Component } from 'react';

class Dog extends Component {
    render() { 
        const {name, age, src, facts} = this.props.dog
        const renderFacts = facts.map((f) => {
            return (
                <div className="Dog-facts">
                    <h1>{f}</h1>
                </div>
            )
        })

        return (
            <div className="Dog">
                <h1 className="Dog-name">{name}</h1>
                <h2 className="Dog-age">Age: {age}</h2>
                <img src={src} alt={name}/>
                {renderFacts}
            </div>
        );
    }
}
 
export default Dog;
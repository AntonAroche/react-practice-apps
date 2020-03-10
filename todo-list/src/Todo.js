import React, { Component } from 'react';

class Todo extends Component {
    defaultProps = {
        task: "Water the dog"
    }

    render() { 
        return (
            <div className="Todo">
                {this.props.task}
            </div>
        );
    }
}
 
export default Todo;
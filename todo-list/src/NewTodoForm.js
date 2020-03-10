import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'

class NewTodoForm extends Component {
    state = { 
        task: ''
     }

    handleChange = (evt) => {
        this.setState({
            task: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addTodo({...this.state, id: uuid(), completed: false})
        this.setState({
            task: ''
        })
    }

    render() { 
        return ( 
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo:</label>
                <input 
                    id="task"
                    name="task"
                    placeholder="New Todo"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Go</button>
            </form>
         );
    }
}
 
export default NewTodoForm;
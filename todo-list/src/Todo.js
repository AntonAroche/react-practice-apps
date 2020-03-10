import React, { Component } from "react";
import "./Todo.css"

class Todo extends Component {
  state = {
    task: this.props.task,
    isEditing: false
  }

  handleDelete = (evt) => {
    this.props.deleteTodo(this.props.id)
  }
  
  handleEdit = () => {
    this.setState({
        isEditing: true
    })
  }

  handleChange = (evt) => {
    this.setState({
        task: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.editTodo({
        task: this.state.task,
        id: this.props.id,
        completed: this.props.completed
    })
    this.setState({isEditing: false})
  }

  toggleComplete = () => {
    this.props.editTodo({
        task: this.state.task,
        id: this.props.id,
        completed: !this.props.completed
    })
  }

  render() {
    if (this.state.isEditing) {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                        placeholder={this.props.task}/>
                    <button>GO</button>
                </form>
            </div>
        )
    }
    return <div className="Todo" >
            <li className={this.props.completed && 'completed'} onClick={this.toggleComplete}>
                {this.props.task}
            </li>
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleDelete}>X</button>
        </div>;
  }
}

export default Todo;

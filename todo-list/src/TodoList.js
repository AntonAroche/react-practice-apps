import React, { Component } from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    state = { 
        todos: [
            {task: 'Pet the plant'}
        ]
    }

    addTodo = (task) => {
        this.setState((state) => ({
            todos: [...state.todos, task]
        }))
    }

    render() { 
        const todos = this.state.todos.map(t => {
            return <Todo task={t.task}/>
        })

        return (
            <div className="TodoList">
                <h1 className="TodoList-title">Todo List</h1>
                {todos}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;
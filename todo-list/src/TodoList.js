import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
    state = { 
        todos: [
            {task: 'Pet the plant'}
        ]
    }

    render() { 
        const todos = this.state.todos.map(t => {
            return <Todo task={t.task}/>
        })

        return (
            <div className="TodoList">
                <h1 className="TodoList-title">Todo List</h1>
                {todos}
            </div>
        );
    }
}
 
export default TodoList;
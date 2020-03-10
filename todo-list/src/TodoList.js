import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = task => {
    this.setState(state => ({
      todos: [...state.todos, task]
    }));
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  editTodo = (newTodo) => {
    const newTodos = (this.state.todos.map(todo => {
        if (todo.id === newTodo.id) {
            return newTodo
        }
        return todo
    }))

    this.setState({todos: newTodos})
  }

  render() {
    const todos = this.state.todos.map(t => {
      return (
        <Todo 
            task={t.task} 
            id={t.id} 
            key={t.id} 
            editTodo={this.editTodo}
            deleteTodo={this.deleteTodo} />
      );
    });

    return (
      <div className="TodoList">
        <h1 className="TodoList-title">Todo List</h1>
        {todos}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

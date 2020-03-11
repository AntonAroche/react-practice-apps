import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

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

  editTodo = newTodo => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === newTodo.id) {
        return newTodo
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };

  render() {
    const todos = this.state.todos.map(t => {
      return (
        <Todo
          task={t.task}
          // TODO Use destructure
          id={t.id}
          key={t.id}
          completed={t.completed}
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>
            Todo List
            <span>Never forget your tasks again</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;

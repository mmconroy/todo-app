import React, { Component } from "react";
import "./App.css";
import shortid from "shortid";
import Header from "./components/Header";
import Details from "./components/Details";
import Todolist from "./components/Todolist";

const TODOS_KEY = "myapp_todos";
class App extends React.Component {
  state = {
    todoList: [],
    newTask: "",
  };
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  componentDidMount() {
    const todoString = localStorage.getItem(TODOS_KEY);
    if (todoString) {
      this.setState({ todoList: JSON.parse(todoString) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      localStorage.setItem(TODOS_KEY, JSON.stringify(this.state.todoList));
    }
  }

  handleAddNewTask = () => {
    let newTask = {
      id: shortid.generate(),
      title: this.state.newTask,
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTask],
      newTask: "",
    });
  };

  onChangeCheckbox = (id) => {
    this.setState((state) => {
      const newList = state.todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: item.completed ? false : true };
        } else {
          return item;
        }
      });
      return {
        todoList: newList,
      };
    });
  };

  deleteItem = (title) => {
    const list = [...this.state.todoList];

    const updatedList = list.filter((item) => item.title !== title);

    this.setState({ todoList: updatedList });
  };

  render() {
    return (
      <div className="app">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <Header numTodos={this.state.todoList.length} />
        <div className="task-input">
          <input
            type="text"
            defaultValue=" "
            value={this.newTask}
            onChange={this.handleInputChange}
          ></input>
          <button className="newtask-btn" onClick={this.handleAddNewTask}>
            Add new task
          </button>
        </div>
        <div>
          <ul className="todoList">
            {this.state.todoList.map((todoItem, index) => (
              <Todolist
                todoItem={todoItem}
                onChangeCheckbox={() => this.onChangeCheckbox(todoItem.id)}
                deleteItem={this.deleteItem}
                key={index}
              />
            ))}
          </ul>
        </div>
        <Details title="Task Details" />
      </div>
    );
  }
}

export default App;

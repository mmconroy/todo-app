import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import Todolist from "./components/Todolist";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: "item title",
        description: "your description",
        completed: false,
      },
      {
        id: 2,
        title: "item title",
        description: "your description",
        completed: false,
      },
      {
        id: 3,
        title: "item title",
        description: "your description",
        completed: false,
      },
    ],
    newTask: "",
  };

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddNewTask = () => {
    let newTaskObject = {
      name: this.state.newTask,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newTaskObject],
      newTaskObject: "",
    }));
  };

  render() {
    return (
      <div className="app">
        <Header numTodos={this.state.todoList.length} />
        <Todolist newTask={this.state.newTask} />
        <div>
          <ul className="todoList">
            {this.state.todoList.map((todo, index) => (
              <li key={index}></li>
            ))}
          </ul>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleAddNewTask}>Add new task</button>
        </div>
        <Details title="Task Details" />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";
import Todolist from "./components/Todolist";

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: "Do laundry",
        description: "your description",
        completed: false,
      },
      {
        id: 2,
        title: "Go to the grocery store",
        description: "your description",
        completed: false,
      },
      {
        id: 3,
        title: "Craft a warm email introduction",
        description: "your description",
        completed: false,
      },
      {
        id: 4,
        title: "Put the beer in the fridge",
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
    let newTask = {
      title: this.state.newTask,
    };
    this.setState({
      todoList: [...this.state.todoList, newTask],
      newTask: "",
    });
  };

  onChangeCheckbox = (id) => {
    this.setState(() => {
      const newList = this.state.todoList.map((item) => {
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

  deleteItem = (id) => {
    const list = [...this.state.todoList];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ todoList: updatedList });
  };

  render() {
    return (
      <div className="app">
        <Header numTodos={this.state.todoList.length} />
        <div className="Sidebar">
          <ul className="todoList">
            {this.state.todoList.map((todoList, index) => (
              <Todolist
                todoItem={todoList}
                onChangeCheckbox={this.onChangeCheckbox}
                deleteItem={this.deleteItem}
                key={index}
              />
            ))}
            <input
              type="text"
              value={this.newTask}
              onChange={this.handleInputChange}
            ></input>
            <button onClick={this.handleAddNewTask}>Add new task</button>
          </ul>
        </div>
        <Details title="Task Details" />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import "./dashboard.css";
import "./details.css";
import "./header.css";
import "./register.css";
import shortid from "shortid";
import Header from "./components/Header";
import Details from "./components/Details";
import Todolist from "./components/Todolist";
import { Route, Switch, withRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";

function bgRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const TODOS_KEY = "myapp_todos";
class App extends React.Component {
  state = {
    todoList: [],
    newTask: "",
    priroityOptions: ["Low", "Medium", "High", "Hair on Fire"],
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
      description: "",
      priority: "",
      backgroundColor: bgRandomColor(),
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

  handleSubmit = (form) => {
    this.setState((state) => {
      let updatedList = state.todoList.map((item) => {
        if (form.id === item.id) {
          return { ...form };
        } else {
          return item;
        }
      });
      return {
        todoList: updatedList,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <Header numTodos={this.state.todoList.length} />
        <Switch>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path={["/", "/Login"]}>
            <Login />
          </Route>
          <Route path="/Details/:itemId">
            <Details
              todoList={this.state.todoList}
              priroityOptions={this.state.priroityOptions}
              onSubmit={this.handleSubmit}
            />
          </Route>
          <Route path="/todolist/">
            <div>
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
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

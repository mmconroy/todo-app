import "./App.css";
import "./dashboard.css";
import "./details.css";
import "./header.css";
import "./register.css";
import "./login.css";
import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import shortid from "shortid";
import Header from "./components/Header";
import Details from "./components/Details";
import Todolist from "./components/Todolist";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";

function bgRandomColor() {
  const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
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
        <Header />
        <Switch>
          <Route exact path="/Register">
            <Register history={this.props.history} />
          </Route>
          <Route exact path="/Login">
            <Login history={this.props.history} />
          </Route>
        </Switch>
        <Switch>
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
          <Route path={"/Dashboard"}>
            <Dashboard numTodos={this.state.todoList.length} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Details from "./components/Details";

const todoList = [
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
];

const user = {
  name: "William",
  avatarURL: require("./img/avatar.svg"),
};

function App(props) {
  return (
    <div className="body">
      <Header title="Todo.ly" />
      <main className="todo-list">
        <h1>{props.title}</h1>
        <ul>
          {todoList.map((todo) => (
            <li>
              <p>{props.title}</p>
              <p>{props.description}</p>
            </li>
          ))}
        </ul>
      </main>
      <Details title="Task Details" />
    </div>
  );
}

export default App;

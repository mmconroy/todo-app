import React from "react";
import "./App.css";
import avatar from "./img/avatar.svg";

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
  avatarURL: "http://www.fillmurray.com/100/100",
};

function App() {
  return (
    <div className="body">
      <header className="header">
        <h1 className="title">Todoly</h1>
        <section classname="user__container">
          <h1>{user.name}</h1>
          <img src={user.avatarURL} />
        </section>
        <nav className="sidenav">
          <a href="#">Nav 1</a>
          <a href="#">Nav 2</a>
          <a href="#">Nav 3</a>
          <a href="#">Nav 4</a>
          <a href="#">Nav 5</a>
          <a href="#">Nav 6</a>
          <a href="#">Settings</a>
        </nav>
      </header>
      <main className="todo-list">
        <h1 className="your-tasks">Your Tasks</h1>
        <ul>
          {todoList.map((todo) => (
            <li>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </li>
          ))}
        </ul>
      </main>

      <section className="task-details">
        <h1 className="task-details">Task Details</h1>
        <button type="button">Edit Task Name</button>
        <input
          type="checkbox"
          id="=detail1"
          name="detail1"
          value="FirstDetail"
        />
        <label for="task1"> First Task Detail </label>
        <button type="button">Delete Detail</button>
        <input
          type="checkbox"
          id="=detail2"
          name="detail2"
          value="SecondDetail"
        />
        <label for="task1"> Second Task Detail </label>
        <button type="button">Delete Detail</button>
        <input
          type="checkbox"
          id="=detail3"
          name="detail3"
          value="ThirdDetail"
        />
        <label for="task1"> Third Task Detail </label>
        <button type="button">Delete Detail</button>
        <button type="button">Add a New Detail</button>
        <button type="button">Share Details</button>
      </section>
    </div>
  );
}

export default App;

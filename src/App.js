import React from "react";
import "./App.css";
import avatar from "./img/avatar.svg";

function App() {
  return (
    <div className="title">
      <h1>Todo.ly</h1>
      <header className="header">
        <img src={avatar} alt="Avatar"></img>
        <h2>Username</h2>
      </header>
      <nav className="sidenav">
        <a href="#">Nav 1</a>
        <a href="#">Nav 2</a>
        <a href="#">Nav 3</a>
        <a href="#">Nav 4</a>
        <a href="#">Nav 5</a>
        <a href="#">Nav 6</a>
        <a href="#">Settings</a>
      </nav>
      <main className="todo-list">
        <h1 className="your-tasks">Your Tasks</h1>
        <input type="text" placeholder="Search Here"></input>
        <input type="checkbox" id="task1" name="task1" value="FirstTask" />
        <label for="task1"> First Todo Item</label>
        <input type="checkbox" id="task2" name="task2" value="SecondTask" />
        <label for="task1"> Second Todo Item</label>
        <input type="checkbox" id="task3" name="task3" value="ThirdTask" />
        <label for="task1"> Third Todo Item</label>
        <input type="checkbox" id="task4" name="task4" value="FourthTask" />
        <label for="task1"> Fourth Todo Item</label>
        <input type="checkbox" id="task5" name="task5" value="FifthTask" />
        <label for="task1"> Fifth Todo Item</label>
        <button type="button">Add a New Task</button>
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

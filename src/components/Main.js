import React from "react";

function Main(props) {
  return (
    <main className="todo-list">
      <h1>{props.main.title}</h1>
      <ul>
        {props.todoList.map((todo) => (
          <li>
            <p>{props.todo.title}</p>
            <p>{props.todo.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;

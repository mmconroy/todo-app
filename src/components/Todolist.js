import React from "react";

function Todolist(props) {
  return (
    <main className="todo-list">
      <li>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </li>
    </main>
  );
}

export default Todolist;

import React from "react";

function Todolist(props) {
  return (
    <main className="todo-list">
      <li className="todo-card">
        <input
          type="checkbox"
          onChange={(event) => ({ onChangeCheckbox: event.target.checked })}
        />
        <p>{props.todoItem.title}</p>{" "}
        <button
          className="delete_button"
          onClick={() => props.deleteItem(props.todoItem.id)}
        >
          Delete Item
        </button>
      </li>
    </main>
  );
}

export default Todolist;

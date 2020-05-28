import React from "react";

function Todolist(props) {
  return (
    <main className="todo-list">
      <li>
        <input
          type="checkbox"
          onChange={(event) => ({ onChangeCheckbox: event.target.checked })}
        />{" "}
        <p>{props.todoItem.title}</p>{" "}
      </li>
      <button
        className="delete_button"
        onClick={() => props.deleteItem(props.todoItem.id)}
      >
        Delete Item
      </button>
    </main>
  );
}

export default Todolist;

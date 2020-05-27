import React from "react";

function Todolist(props) {
  return (
    <main className="todo-list">
      <li>
        <p>{props.title}</p>
        <input
          type="checkbox"
          onChange={(event) =>
            this.setState({ onChangeCheckbox: event.target.checked })
          }
        />{" "}
      </li>
      <button
        className="delete_button"
        onClick={() => props.deleteItem(props.id)}
      >
        Delete Item
      </button>
    </main>
  );
}

export default Todolist;

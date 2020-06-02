import React from "react";
import { MdDelete } from "react-icons/md";
import { MdCheck } from "react-icons/md";

function Todolist(props) {
  console.log(props.todoItem);
  return (
    <main className="todo-list">
      <li className="todo-card">
        <p
          style={
            props.todoItem.completed ? { textDecoration: "line-through" } : null
          }
        >
          {props.todoItem.title}
        </p>{" "}
        <div classname="icons">
          {" "}
          <MdCheck
            color="white"
            padding="2px"
            size="24px"
            onClick={() => props.onChangeCheckbox(props.todoItem.completed)}
          />
          <MdDelete
            color="white"
            padding="2px"
            size="24px"
            onClick={() => props.deleteItem(props.todoItem.title)}
          ></MdDelete>
        </div>
      </li>
    </main>
  );
}

export default Todolist;

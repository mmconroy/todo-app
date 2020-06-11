import React from "react";
import { withRouter } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdDetails } from "react-icons/md";

function Todolist(props) {
  return (
    <main className="todo-list">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <li
        className="todo-card"
        style={{
          backgroundColor: props.todoItem.backgroundColor,
        }}
      >
        <p
          style={
            props.todoItem.completed ? { textDecoration: "line-through" } : null
          }
        >
          {props.todoItem.title}
        </p>{" "}
        <div className="icons">
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
          <MdDetails
            color="white"
            padding="2px"
            size="24px"
            onClick={() => props.history.push("/Details/" + props.todoItem.id)}
          ></MdDetails>
        </div>
      </li>
    </main>
  );
}

export default withRouter(Todolist);

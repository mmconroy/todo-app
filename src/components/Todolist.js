import React from "react";
import { MdDelete } from "react-icons/md";
import { MdCheck } from "react-icons/md";

function Todolist(props) {
  console.log(props.todoItem);
  return (
    <main className="todo-list">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div className="task-input">
        <input
          type="text"
          defaultValue=" "
          value={props.newTask}
          onChange={props.handleInputChange}
        ></input>
        <button className="newtask-btn" onClick={props.handleAddNewTask}>
          Add new task
        </button>
      </div>
      <ul className="todoList">
        {this.state.todoList.map((todoItem, index) => (
          <Todolist
            todoItem={todoItem}
            onChangeCheckbox={() => props.onChangeCheckbox(props.todoItem.id)}
            deleteItem={props.deleteItem}
            key={index}
          />
        ))}
        <li className="todo-card">
          <p
            style={
              props.todoItem.completed
                ? { textDecoration: "line-through" }
                : null
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
      </ul>
    </main>
  );
}

export default Todolist;

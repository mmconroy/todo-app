import React from "react";

function Todolist(props) {
  return (
    <main className="todo-list">
      <div>
        <p>Test</p>
        <input
          type="text"
          value={props.state.newTask}
          onChange={props.handleInputChange}
        ></input>
        <button onClick={this.handleAddNewTask}>Add new task</button>
      </div>
      <ul>
        <li>
          <p>{props.todoList.title}</p>
          <p>{props.todoList.description}</p>
        </li>
      </ul>
    </main>
  );
}

export default Todolist;

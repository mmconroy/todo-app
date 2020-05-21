import React from "react";

function Details(props) {
  return (
    <section className="task-details">
      <h1>{props.todoList.title}</h1>
      <button type="button">Edit Task Name</button>
      <input type="checkbox" id="=detail1" name="detail1" value="FirstDetail" />
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
      <input type="checkbox" id="=detail3" name="detail3" value="ThirdDetail" />
      <label for="task1"> Third Task Detail </label>
      <button type="button">Delete Detail</button>
      <button type="button">Add a New Detail</button>
      <button type="button">Share Details</button>
    </section>
  );
}

export default Details;

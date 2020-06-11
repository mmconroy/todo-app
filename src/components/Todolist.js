import React from "react";
import { withRouter } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdDetails } from "react-icons/md";
import { StyledTodoCard } from "./todolist.styled";
import { StyledTodoTitle } from "./todolist.styled";
import { StyledTodoList } from "./todolist.styled";
import { StyledIcons } from "./todolist.styled";

function Todolist(props) {
  return (
    <StyledTodoList>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <StyledTodoCard>
        <StyledTodoTitle>{props.todoItem.title}</StyledTodoTitle>{" "}
        <StyledIcons>
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
        </StyledIcons>
      </StyledTodoCard>
    </StyledTodoList>
  );
}

export default withRouter(Todolist);

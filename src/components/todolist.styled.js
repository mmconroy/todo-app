import styled from "styled-components";

export const StyledTodoCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 128px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  backgroundcolor: ${(props) => props.todoItem.backgroundColor};
`;

export const StyledTodoTitle = styled.p`
  padding: 1rem;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 2rem;
  textDecoration: line-through  ${(props) => props.todoItem.completed} ? : null
`;

export const StyledTodoList = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  color: white;
  width: 100%;
`;

export const StyledIcons = styled.div`
  display: flex;
  width: 8rem;
  justify-content: space-evenly;
`;

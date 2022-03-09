import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TodoCheckbox from "./TodoCheckbox";
import Button from "./Button";

const Todo = ({ toggleTodo, deleteTodo, id, completed, title }) => {
  let navigate = useNavigate()

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  const handleOnClick = (e) => { 
    navigate(`/todo/${id}`);  
  }

  return (
    <StyledDiv onClick={handleOnClick}>
      <TodoCheckbox toggleTodo={toggleTodo} completed={completed} id={id} />
      <h3>{title}</h3>
      <Button onClick={handleDelete} bgColor="#ef4444">
        Delete
      </Button>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #1e293b;
  gap: 1rem;
  padding: 0.5rem 1rem;
  justify-content: space-between;
`;

export default Todo;

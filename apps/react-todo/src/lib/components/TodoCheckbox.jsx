import React from "react";
import styled from "styled-components";

const TodoCheckbox = ({ completed, toggleTodo, id }) => {

  const handleChange = (e) => {
    e.stopPropagation();
    toggleTodo(id);
  }

  const handleClick = (e) => {
    e.stopPropagation();
  }

  return (
    <Container>
      <input onClick={handleClick} onChange={handleChange} type="checkbox" checked={completed} />
    </Container>
  );
};

export default TodoCheckbox;

const Container = styled.div`
  position: relative;

  input {
    appearance: none;
    height: 24px;
    width: 24px;
    border: 1px solid #344953;
    border-radius: 50%;
    outline: none;
    background-color: #41b883;
    cursor: pointer;
  }

  input:checked {
    /* border: 1px solid #41B883; */
    /* background-color: #34495E; */
  }

  input:checked::after {
    content: "";
    position: absolute;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    height: 4px;
    width: 8px;
    left: 11px;
    top: 10px;
  }

  input:active {
    border: 2px solid #34495e;
  }
`;

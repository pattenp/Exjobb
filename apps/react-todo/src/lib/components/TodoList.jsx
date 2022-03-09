import React from "react";
import styled from "styled-components";

import Todo from "./Todo";

const TodoList = ({ todos, title, toggleTodo, removeTodo }) => {
  return (
    <>
      <h3>{title}</h3>
      <StyledUl>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={removeTodo}
            />
          </li>
        ))}
      </StyledUl>
    </>
  );
};

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1rem;
  }
`;

export default TodoList;

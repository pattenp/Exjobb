import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../lib/components/Button";
import styled from "styled-components";

const TodoDetail = ({ todos, toggleTodo, deleteTodo }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [todo, setTodo] = useState(todos.find((todo) => todo.id === id));

  useEffect(() => {
    setTodo(todos.find(todo => todo.id === id));
  }, [id, todos]);
  

  const handleToggle = (e) => toggleTodo(id);

  const handleDelete = (e) => {
    deleteTodo(id);
    navigate(-1);
    
  };

  if (!todo) return <></>;

  return (
    <>
      <h2>{todo.title}</h2>
      {todo.description && (
        <>
          <h3>Beskrivning</h3>
          <p>{todo.description}</p>
        </>
      )}
      <StyledDiv>
        <Button onClick={handleToggle} bgColor="#22D3EE">
          {todo.completed ? "Avmarkera" : "Makera som klar"}
        </Button>
        <Button onClick={handleDelete} bgColor="#ef4444">
          Ta bort uppgift
        </Button>
      </StyledDiv>
    </>
  );
};

  const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `; 

export default TodoDetail;

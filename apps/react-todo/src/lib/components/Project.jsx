import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Project = ({ project, todos }) => {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/project/${project.id}`);
  };

  return (
    <Container onClick={handleClick}>
      <h3>{project.title}</h3>
      <p>
        {todos.filter(t => project.id === t.projectId && t.completed).length} av {todos.length}
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #64748b;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  h3 {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default Project;

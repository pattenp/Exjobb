import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import PlaceholderText from "../lib/components/PlaceholderText";
import TodoList from "../lib/components/TodoList";
import PageHeader from "../lib/components/PageHeader";

const ProjectDetail = ({ projects, todos, toggleTodo, removeTodo }) => {
  const filters = ["Alla", "Aktiva", "Klara"];
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  let { id } = useParams();
  const [project, setProject] = useState(projects.find((p) => p.id === id));

  useEffect(() => {
    setProject(projects.find((p) => p.id === id));
  }, [id, projects]);

  useEffect(() => {
    setCompletedTasks(todos.filter((t) => t.completed && t.projectId === id));
    setActiveTasks(todos.filter((t) => !t.completed && t.projectId === id));
  }, [todos, id, projects]);

  const handleFilterChange = (e) => {
    setSelectedFilter(parseInt(e.target.value));
  };

  if (!project) {
    return <></>;
  }

  return (
    <>
      <PageHeader
        title={project.title}
        action={<Link to={`/add-todo/${project.id}`}>Lägg till uppgift</Link>}
      />
      <BtnGroup>
        {filters.map((filter, index) => (
          <FilterLabel key={index} selected={selectedFilter === index}>
            {filter}
            <input
              type="radio"
              onChange={handleFilterChange}
              name="filter"
              value={index}
            />
          </FilterLabel>
        ))}
      </BtnGroup>
      {todos.length > 0 ? (
        <>
          {(selectedFilter === 0 || selectedFilter === 1) &&
            (activeTasks.length > 0 ? (
              <div>
                <TodoList
                  title={"Aktiva uppgifter"}
                  todos={activeTasks}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              </div>
            ) : (
              <PlaceholderText>Inga aktiva uppgifter</PlaceholderText>
            ))}
          {(selectedFilter === 0 || selectedFilter === 2) &&
            (completedTasks.length > 0 ? (
              <div>
                <TodoList
                  title={"Avslutade uppgifter"}
                  todos={completedTasks}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              </div>
            ) : (
              <PlaceholderText>Inga avslutade uppgifter</PlaceholderText>
            ))}
        </>
      ) : (
        <PlaceholderText>
          Du har inga inga uppgifter i projektet
        </PlaceholderText>
      )}
    </>
  );
};

const BtnGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const FilterLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border: 1px solid #0ea5e9;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#f1f5f9" : "#0ea5e9")};
  font-weight: bold;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.selected ? "#0ea5e9" : "none")};

  input[type="radio"] {
    appearance: none;
  }
`;

export default ProjectDetail;

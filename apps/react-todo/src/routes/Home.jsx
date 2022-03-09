import React from "react";
import PageHeader from "../lib/components/PageHeader";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PlaceholderText from "../lib/components/PlaceholderText";
import Project from "../lib/components/Project";

const Home = ({ projects, todos }) => {
  return (
    <>
      <PageHeader
        title="Dina projekt"
        action={<Link to="/project">Skapa project</Link>}
      />
      {projects?.length > 0 ? (
        <ProjectsContainer>
          {projects.map((project) => (
            <Project
              project={project}
              key={project.id}
              todos={todos.filter((t) => t.projectId === project.id)}
            />
          ))}
        </ProjectsContainer>
      ) : (
        <PlaceholderText>Du har inga projekt än</PlaceholderText>
      )}
    </>
  );
};

const ProjectsContainer = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
  gap: 1rem;
`;

export default Home;

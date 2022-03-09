import React, { useState } from "react";
import styled from "styled-components";
import Button from "../lib/components/Button";
import { useNavigate } from "react-router-dom";

const AddProjects = ({addProject}) => {
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  const [projectName, setProjectName] = useState("");
  

  const handleChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim().length === 0) {
      setError(true);
      return;
    }
    addProject(projectName);
    navigate(-1);
  };

  return (
    <form>
      <StyledLabel>
        Ange Namn på projekt
        <StyledInput type="text" onChange={handleChange} value={projectName} />
        <StyledP error={error}>Du måste ange ett namn på ditt projekt.</StyledP>
      </StyledLabel>
      <StyledDiv>
        <Button bgColor="#22c55e" onClick={handleSubmit}>
          Add Project
        </Button>
        <Button bgColor="#ef4444" onClick={handleCancel}>
          Avbryt
        </Button>
      </StyledDiv>
    </form>
  );
};

const StyledLabel = styled.label`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const StyledP = styled.div`
  display: ${(props) => (props.error ? "block" : "none")};
  color: red;
`;

const StyledInput = styled.input`
  font-size: 1.4rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default AddProjects;

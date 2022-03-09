import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../lib/components/Button";

const AddTodo = ({ addTodo }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    console.log("Fire Fire")
    e.preventDefault();
    if (title.trim().length === 0) {
      setError(true);
      return;
    }
    addTodo(id, title, description);  
    navigate(-1);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <h2>Lägg till upggift</h2>
      <form>
        <StyledLabel error={error}>
          Titel
          <input type="text" value={title} onChange={handleTitleChange} />
          <span>En uppgift måste innehålla en titel</span>
        </StyledLabel>
        <StyledLabel>
          Beskrivning
          <textarea
            cols="37"
            rows="5"
            value={description}
            onChange={handleDescriptionChange}
          />
        </StyledLabel>
        <StyledDiv>
          <Button onClick={handleSubmit} bgColor="#22c55e">
            Spara
          </Button>
          <Button onClick={handleCancel} bgColor="#ef4444">
            Avbryt
          </Button>
        </StyledDiv>
      </form>
    </>
  );
};

const StyledLabel = styled.label`
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
    
    span {
    display: ${(props) => (props.error ? "block" : "none")};
    color: red;
    font-size: 0.8rem;
  }

  input[type="text"] {
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export default AddTodo;

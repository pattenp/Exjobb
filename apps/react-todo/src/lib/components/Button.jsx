import React from "react";
import styled from "styled-components";

const Button = ({ onClick, bgColor, children, ...rest }) => {
  return (
    <StyledButton bgColor={bgColor} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || "#22c55e"};
  font-weight: bold;
  font-size: 1.175rem;
  padding: 0.5rem 1rem;
  color: #f8fafc;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0, 0.2);
`;

export default Button;

import React from 'react'
import styled from "styled-components";

const PageHeader = ({title, action}) => {
  return (
    <Container>
        <h2>{title}</h2>
        {action}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default PageHeader;
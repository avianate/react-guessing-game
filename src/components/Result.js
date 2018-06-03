import React from "react";
import styled from "styled-components";

const StyledResults = styled.div`
    grid-area: results;
`;

const Result = ({message}) => (
    <StyledResults>
        <h5>{message}</h5>
    </StyledResults>
);

export default Result;
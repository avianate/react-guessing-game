import React, { Component } from "react";
import Button from "../components/Button";
import { GAMETYPE } from "../App";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
    background-color: #f7f7f7;
    margin: 20px auto;
    width: 400px;
    border-radius: 4px;
`;

const groupStyle = {
    marginLeft: "10px"
};

const ButtonGroup = ({ easyAction, mediumAction, hardAction, activeButton }) => (
    <StyledButtonGroup>
        <Button
            key="1"
            text="Easy"
            subtext="0 – 10"
            action={easyAction}
            isActive={activeButton === GAMETYPE.EASY}
        />
        <Button
            key="2"
            text="Medium"
            subtext="0 – 100"
            action={mediumAction}
            isActive={activeButton === GAMETYPE.MEDIUM}
        />
        <Button
            key="3"
            text="Hard"
            subtext="0 – 1,000"
            action={hardAction}
            isActive={activeButton === GAMETYPE.HARD}
        />
    </StyledButtonGroup>
);

export default ButtonGroup;

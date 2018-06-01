import React, { Component } from "react";
import Button from "../components/Button";
import { GAMETYPE } from "../App";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
    background-color: #f7f7f7;
    margin: 20px auto;
    width: 290px;
    border-radius: 4px;
    border-color: #dfdfdf;
    box-shadow: 0px 0px 0px 1px hsla(0, 0%, 0%, 0.1)
`;

const groupStyle = {
    marginLeft: "10px"
};

const ButtonGroup = ({ easyAction, mediumAction, hardAction, activeButton }) => (
    <StyledButtonGroup>
        <Button
            text="Easy"
            subtext="0 – 10"
            action={easyAction}
            isActive={activeButton === GAMETYPE.EASY}
        />
        <Button
            text="Medium"
            subtext="0 – 100"
            action={mediumAction}
            isActive={activeButton === GAMETYPE.MEDIUM}
        />
        <Button
            text="Hard"
            subtext="0 – 1,000"
            action={hardAction}
            isActive={activeButton === GAMETYPE.HARD}
        />
    </StyledButtonGroup>
);

export default ButtonGroup;

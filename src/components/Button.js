import React, {Component} from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.isActive ? "#a9cdf9" : props.primary ? "#77d857" : "#fff"};
    color: ${props => props.primary ? "#fff" : "#333"};
    font-weight: bold;
    font-size: ${props => props.primary ? "14px" : "default"};
    text-shadow: ${props => props.primary ? "1px 1px 2px hsla(0, 0%, 0%, 0.25)" : "none"};
    letter-spacing: ${props => props.primary ? "1px" : "default"};
    text-transform: uppercase;
    box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.25);
    margin: 10px;
    border-radius: 4px;
    width: ${props => props.primary ? "400px" : "75px"};
    height: 40px;
    outline: none;
    transition: all 0.3s;

    &:hover {
        box-shadow: 2px 2px 3px hsla(0, 0%, 0%, 0.30);
        transform: translateY(-1px);
    }
`;

const activeStyle = {
    backgroundColor: "#a9cdf9"
};

const Button = ({text, subtext, action, isActive, ...props}) => (
    <StyledButton 
        primary={props.primary}
        isActive={isActive}
        onClick={action}>
        {text}
        <div>{subtext}</div>
    </StyledButton>
    // <button style={isActive ? activeStyle : null} onClick={action}>
    //     {text}
    //     <div>{subtext}</div>
    // </button>
);

export default Button;
import React, {Component} from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.isActive ? "#a9cdf9" : props.primary ? "#77d857" : "#fff"};
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.25);
    margin: 10px;
    border-radius: 4px;
    width: 75px;
    height: 40px;
    outline: none;
    transition: all 0.3s;

    &:hover {
        box-shadow: 2px 2px 3px hsla(0, 0%, 0%, 0.30);
        transform: translateY(-1px);
    }

    &:focus {
            box-shadow: 0 0 5px #7fadf9;
            border: 3px solid #7fadf9;
        }

    ${props => props.primary && css`
        color: #fff;
        font-size: 14px;
        text-shadow: 1px 1px 2px hsla(0, 0%, 0%, 0.25);
        letter-spacing: 1px;
        width: 290px;
    `}
`;

const activeStyle = {
    backgroundColor: "#a9cdf9"
};

const Button = ({className, text, subtext, action, isActive, ...props}) => (
    <StyledButton 
        className={className}
        primary={props.primary}
        isActive={isActive}
        onClick={action}>
        {text}
        <div>{subtext}</div>
    </StyledButton>
);

export default Button;
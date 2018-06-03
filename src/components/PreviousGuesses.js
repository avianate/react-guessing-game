import React, {Component} from "react";
import styled from "styled-components";

const SideBar = styled.div`
    grid-area: sidebar;
`;

const List = styled.li`
    background: rgba(255, 0, 187, 0.48);
    padding: 5px;
    margin: 10px 0;
    max-width: 40px;
    border-radius: 4px;
    color: rgb(153, 0, 169);
`;

const PreviousGuesses = ({guesses}) => (
    <SideBar>
        <h5>Previous Guesses</h5>
        <ol>
            {
                guesses && guesses.map((guess, index) => (<List key={index}>{guess}</List>))
            }
        </ol>
    </SideBar>
);

export default PreviousGuesses;
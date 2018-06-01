import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "../components/Button";
import styled, {css} from "styled-components";

const StyledInput = styled.input`
    margin: 0 0 10px 0;
    width: 60px;
    height: 35px;
    font-size: 25px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    padding: 5px 10px;;
`;

class GuessForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { value: "" }

        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus(e) {
        const input = e.target;
        input.select();
    }

    render() {
        const {guess, maxNumber} = this.props;
        return (
            <div>
                <StyledInput type="number" value={guess} onChange={this.props.updateGuess} onFocus={this.handleFocus} />
                <div>
                    <Button primary={true} text="Guess" action={this.props.onGuess} />
                </div>
            </div>
        );
    }
}

export default GuessForm;
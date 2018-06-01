import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import Button from "./components/Button";
import GuessForm from "./components/GuessForm";
import Result from "./components/Result";
import styled from "styled-components";

// Game Type
export const GAMETYPE = {
    EASY: "EASY",
    MEDIUM: "MEDIUM",
    HARD: "HARD"
};

// The default state for new game
const defaultState = {
    guess: "",
    number: -1,
    message: "",
    isGameOver: false,
};

const Container = styled.div`
    background : linear-gradient(90deg, rgba(226,239,255,1) 0%, rgba(255,225,247,1) 50%, rgba(205,255,208,1) 100%);
    padding: 25px;
`;

// The game application
class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = { ...defaultState, gameType: GAMETYPE.EASY };

        this.generateNumber = this.generateNumber.bind(this);
        this.easyGame = this.easyGame.bind(this);
        this.mediumGame = this.mediumGame.bind(this);
        this.hardGame = this.hardGame.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
        this.updateResultMessage = this.updateResultMessage.bind(this);
        this.getResultMessage = this.getResultMessage.bind(this);
        this.isGameOver = this.isGameOver.bind(this);
        this.newGame = this.newGame.bind(this);
        this.updateGuess = this.updateGuess.bind(this);
        this.getMaxNumber = this.getMaxNumber.bind(this);
    }

    // Generates the number to guess
    generateNumber() {
        const {gameType} = this.state;
        const multiplier = gameType === GAMETYPE.EASY 
                                            ? 11 
                                            : gameType === GAMETYPE.MEDIUM 
                                                ? 101 
                                                : 1001;
        let decimal = Math.random();
        let number = Math.floor(decimal * multiplier);

        return number;
    }

    // Sets the game state to an easy game and then initializes the new game
    easyGame() {
        this.setState({...this.state, gameType: GAMETYPE.EASY}, this.newGame);
    }

    // Sets the game state to a medium game and then initializes the new game
    mediumGame() {
        this.setState({...this.state, gameType: GAMETYPE.MEDIUM}, this.newGame);
    }

    // Sets the game state to a har game and then initializes the new game
    hardGame() {
        this.setState({...this.state, gameType: GAMETYPE.HARD}, this.newGame);
    }

    // Checks if the game is over and updates the result message
    isGameOver() {
        const {number, guess} = this.state;
        const message = this.getResultMessage();

        if (number === parseInt(guess)) {
            this.setState({...this.state, message, isGameOver: true});
            
            return true;
        }
        
        return false;
    }

    // Function used by the input's onChange event
    // The parent handles the input's state so that we can clear the input at the start of a new game
    updateGuess(e) {
        const guess = e.target.value;
        const maxValue = this.getMaxNumber();
        let guessValue = guess;

        if (parseInt(guess) > maxValue) {
            guessValue = maxValue.toString();
        }

        this.setState({...this.state, guess: guessValue});
    }

    // Function passed down to the GuessForm's "Guess" button
    handleGuess() {
        let isGameOver = this.isGameOver();
        
        if (!isGameOver) {
            this.updateResultMessage();
        }
    }

    // Get's the result message string
    getResultMessage() {
        const {guess, number, gameType, isGameOver} = this.state;
        let guessedNumber = parseInt(guess);
        
        let guessRange = "";

        switch (gameType) {
            case GAMETYPE.MEDIUM:
                guessRange = "0 and 100";
                break;
            case GAMETYPE.HARD:
                guessRange = "0 and 1,000";
                break;
            default:
                guessRange = "0 and 10";
                break;
        }

        if (guessedNumber === number && !isGameOver) {
            return `You won! The correct number is ${number}`;
        }

        if (guessedNumber == null || isGameOver || guess === "") {
            return `Pick a number between ${guessRange}`;
        }

        if (guessedNumber > number) {
            return "Lower";
        }

        return "Higher";
    }

    // Updates the local state's message property to the result string
    updateResultMessage() {
        const resultMessage = this.getResultMessage();

        this.setState({...this.state, message: resultMessage});
    }

    // Starts a new game
    newGame() {
        const number = this.generateNumber();
        const message = this.getResultMessage();
        const {gameType} = this.state;

        this.setState({...this.state, ...defaultState, gameType: gameType || GAMETYPE.EASY, number, message});
    }

    // Gets the maximum number for the game type
    getMaxNumber() {
        const {gameType} = this.state;

        switch(gameType) {
            case GAMETYPE.EASY:
                return 10;
            case GAMETYPE.MEDIUM:
                return 100;
            case GAMETYPE.HARD:
                return 1000;
        }
    }

    componentDidMount() {
        this.newGame();
    }

    render() {
        const {message, isGameOver, guess, gameType} = this.state;

        return (
            <Container className="App">
                
                <ButtonGroup 
                    activeButton={gameType}
                    easyAction={this.easyGame} 
                    mediumAction={this.mediumGame} 
                    hardAction={this.hardGame} 
                />

                <GuessForm 
                    guess={guess} 
                    onGuess={this.handleGuess} 
                    updateGuess={this.updateGuess} />

                <Result message={message} />
                {
                    isGameOver && <Button text="New Game" action={this.newGame} />
                }

            </Container>
        );
    }
}

export default App;

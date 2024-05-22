import React, { createContext, useState, useEffect } from "react";
export const GameContext = createContext();

export default function GameContextProvider(props) {

// Store the data for the game, including the size of the table and the containing cards
    const [table, setTable] = useState({
        size: 18,
        cards: [
        ]
    });

// shuffle the cards when the game starts
// Store the flipped cards, solved cards, missed attempts, and win status
const [flippedCards, setFlippedCards] = useState([]);
const [solved, setSolved] = useState([]);
const [missed, setMissed] = useState(0);
const [win, setWin] = useState(false);

// If two cards are flipped, check if they match
useEffect(() => {
    checkMatch();
}, [flippedCards]);

// Check if the flipped cards match, add them to the solved array, and check if the player has won
function checkMatch() {
    if (flippedCards.length === 2) {
        if (flippedCards[0].content === flippedCards[1].content) {
            setSolved([...solved, flippedCards[0], flippedCards[1]]);
            setTimeout(() => {
                setFlippedCards([]);
            }, 1000);
        } else {
            setTimeout(() => {
                setFlippedCards([]);
                setMissed(missed + 1);
            }, 1000);
        }
    }
    checkWin();
}

// Check if the player has won
    function checkWin() {
        if (solved.length === table.size) {
            setWin(true);
        }
    }


    return (
        <GameContext.Provider value={{ table, setTable, solved, setSolved, flippedCards, setFlippedCards, missed, win, setWin, setMissed }}>
            {props.children}
        </GameContext.Provider>
    );
}
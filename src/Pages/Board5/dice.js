import React, { createContext, useState, useContext, useEffect } from 'react';
import './css/squares.css';

const DContext = createContext();

const Dice5x5Provider = ({ children }) => {
  const [diceValue, setDiceValue] = useState(0);
  const [rolling, setRolling] = useState(false); // New state for rolling animation
  const Dice = [1, 2, 3, 4, 8];

  const rollDice = () => {
    setRolling(true); // Start rolling animation
    let n = Dice[Math.floor(Math.random() * Dice.length)];
    setTimeout(() => {
      setDiceValue(n);
      setRolling(false); // Stop rolling animation
    }, 1000); // Adjust the duration as needed
  };

  return (
    <DContext.Provider value={{ diceValue, rolling, rollDice }}>
      {children}
    </DContext.Provider>
  );
};

const Dice = () => {
  const { diceValue, rolling, rollDice } = useContext(DContext);

  const handleDiceClick = () => {
    rollDice();
  };

  return (
    <button className={`dice-wrapper ${rolling ? 'rolling' : ''}`} onClick={handleDiceClick}>
      {diceValue}
    </button>
  );
};

export { DContext, Dice5x5Provider, Dice };

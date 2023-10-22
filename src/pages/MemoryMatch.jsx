import React, { useEffect, useState } from "react";
import back from "../MemoryImages/back.jpg";
import card1 from "../MemoryImages/card1.jpg";
import card2 from "../MemoryImages/card2.jpg";
import card3 from "../MemoryImages/card3.jpg";
import card4 from "../MemoryImages/card4.jpg";

const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const newCards = [];
    const images = [{id:1 , image: '../images/card1.jpg'}, {id:2 , image: '../images/card2.jpg'}, {id:3 , image: '../images/card3.jpg'}, {id:4 , image: '../images/card4.jpg'}];
    for (let i = 0; i < images.length; i++) {
      newCards.push({
        id: i,
        image: images[i],
        flipped: false,
      });
      newCards.push({
        id: i,
        image: images[i],
        flipped: false,
      });
    }

    shuffleArray(newCards);
    setCards(newCards);
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const checkForMatch = () => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.id === choiceTwo.id) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === choiceOne.id ? { ...card, matched: true } : card
          )
        );
        setChoiceOne(null);
        setChoiceTwo(null);
      } else {
        setTurns((prevTurns) => prevTurns + 1);
        setChoiceOne((prevChoice) => {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === prevChoice.id ? { ...card, flipped: false } : card
              )
            );
          }, 1000);
          return null;
        });
        setChoiceTwo((prevChoice) => {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === prevChoice.id ? { ...card, flipped: false } : card
              )
            );
          }, 1000);
          return null;
        });
      }
    }
  };
  const startTimer = () => {
    setIntervalId(
      setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000)
    );
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const resetGame = () => {
    setTurns(0);
    setTimer(0);
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, flipped: false, matched: false }))
    );
  };

  return (
    <div>
      <h2>Memory Match Game</h2>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""} ${
              card.matched ? "matched" : ""
            }`}
            onClick={() => handleChoice(card)}>
            <img className="card-image" src={card.image} alt={card.id} />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="btn" onClick={startTimer}>
          Start Timer
        </button>
        <button className="btn" onClick={stopTimer}>
          Stop Timer
        </button>
        <button className="btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="mt-4">
        <p>Turns: {turns}</p>
        <p>Timer: {timer}</p>
      </div>
    </div>
  );
};

export default MemoryMatch;

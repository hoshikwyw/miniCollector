import React, { useEffect, useState } from "react";
import MemoCards from "./MemoCards";


const GameBoard = ({ mode }) => {
  // console.log(imageCards);
  const [cards, setCards] = useState([]);
  const [flipCard, setFlipCard] = useState([]);
  const [matchCard, setMatchCard] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(mode === "hard" ? 60 : null);

  useEffect(() => {
    startGame();
  }, [mode]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameComplete(true);
    }
  }, [timeLeft]);

  const startGame = () => {

    const shuffledCards = shuffle([
      { id: 1, value: "A", imagePath: "assets/MemoryCards/card1.jpg" },
      { id: 2, value: "B", imagePath: "assets/MemoryCards/card2.jpg" },
      { id: 3, value: "C", imagePath: "assets/MemoryCards/card3.jpg" },
      { id: 4, value: "D", imagePath: "assets/MemoryCards/card4.jpg" },
      { id: 1, value: "A", imagePath: "assets/MemoryCards/card1.jpg" },
      { id: 2, value: "B", imagePath: "assets/MemoryCards/card2.jpg" },
      { id: 3, value: "C", imagePath: "assets/MemoryCards/card3.jpg" },
      { id: 4, value: "D", imagePath: "assets/MemoryCards/card4.jpg" },
    ]);
    const initialCards = shuffledCards.map((imagePath, index) => ({
      id: index,
      imagePath,
      isFlipped: false,
    }));
    // console.log(imagePath);


    setCards(initialCards);
    setFlipCard([]);
    setMatchCard(0);
    setGameEnd(false);

    if (mode === "hard") {
      setTimeLeft(60);
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setTimeLeft(null);
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const handleCardClick = (clickedCard) => {
    if (flipCard.length === 2 || clickedCard.isFlipped || gameEnd) return;

    const newFlippedCards = [...flipCard, clickedCard];

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );
    setFlipCard(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;

      if (firstCard.value === secondCard.value) {
        setMatchCard(matchCard + 1);
        if (matchCard + 1 === cards.length / 2) {
          setGameEnd(true);
        }
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              newFlippedCards.includes(card)
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }

      setTimeout(() => {
        setFlipCard([]);
      }, 1000);
    }
  };

  return (
    <div className="game-board">
      <div className="game-status">
        {gameEnd ? (
          <div className="game-complete">Congratulations! You won!</div>
        ) : (
          <div className="time-left">
            {mode === "time-limited" ? `Time Left: ${timeLeft}` : ""}
          </div>
        )}
      </div>
      <div className=" cards w-full grid grid-cols-4 gap-5">
        {cards.map((card) => (
          <MemoCards
            key={card.id}
            value={card.imagePath}
            isFlipped={card.isFlipped}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      <button onClick={startGame}>Restart</button>
    </div>
  );
};

export default GameBoard;

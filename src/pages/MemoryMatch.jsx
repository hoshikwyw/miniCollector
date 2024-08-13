import React, { useEffect, useRef, useState } from "react";
import SubNavBar from "../components/SubNavBar";
import "../components/css/memoryCard.css"

const MemoryMatch = () => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    const initialCards = generateCard()
    setCards(initialCards)
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
  }

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) {
      return
    }
    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)
      const [firstIndex, secondIndex] = newFlippedCards
      if (cards[firstIndex].id === cards[secondIndex].id) {
        const newMatchedCards = ([...matchedCards, firstIndex, secondIndex])
        setMatchedCards(newMatchedCards)
        if (newMatchedCards.length === cards.length) {
          setTimeout(() => {
            alert("Congratulations! You won the game in " + moves + " moves.")
            startNewGame()
          }, 500)
        }
      }
      setTimeout(() => {
        setFlippedCards([])
      }, 1000)
    }
  }

  return (
    <>
      <SubNavBar title="Memory Match Game" />
      <div className=" min-h-[calc(100vh-190px)] bgShadow w-[35%] mx-auto m-5 p-10 flex flex-col">
        <div className=" wrapper mx-auto">
          <ul className="cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                isFlipped={flippedCards.includes(index) || matchedCards.includes(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
            <div class="details">
              <p class="time">Time: <span><b>20</b>s</span></p>
              <p class="flips">Move: <span><b>{moves}</b></span></p>
              <button>Refresh</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

const generateCard = () => {
  const images = [
    "/MemoryImages/img-1.png",
    "/MemoryImages/img-2.png",
    "/MemoryImages/img-3.png",
    "/MemoryImages/img-4.png",
    "/MemoryImages/img-5.png",
    "/MemoryImages/img-6.png"
  ]
  const cards = images.concat(images).map((image, index) => ({
    id: index % images.length, image
  })).sort(() => Math.random() - 0.5)
  return cards
}

const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div className={` card ${isFlipped ? "flip" : ""}`} onClick={onClick}>
      <div className="view back-view">
        <img src={card.image} alt="" />
      </div>
      <div className="view front-view ">
        <img src="/MemoryImages/que_icon.svg" alt="" />
      </div>
    </div>
  )
}

export default MemoryMatch;


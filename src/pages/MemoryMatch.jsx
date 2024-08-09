import React, { useEffect, useState } from "react";
import SubNavBar from "../components/SubNavBar";

const images = ['/MemoryImages/card1.jpg', '/MemoryImages/card2.jpg', '/MemoryImages/card3.jpg', '/MemoryImages/card4.jpg', '/MemoryImages/card5.jpg'];

const shuffleCards = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
}

const MemoryMatch = () => {
  const [cards, setCards] = useState([]);
  const [flippedCard, setFlippedCard] = useState([])
  const [disabled, setDisabled] = useState(false)
  let flipped = false
  let matched = false
  // console.log(flippedCard);


  useEffect(() => {
    const shuffledArray = shuffleCards([...images, ...images])
    setCards(shuffledArray.map((cardImage, idx) => ({
      id: idx,
      cardImage,
      flipped: false,
      matched: false
    })))
  }, [])

  const handleCardClick = (card) => {
    if (flippedCard.length === 0) {
      setFlippedCard([card])
      flipCard(card?.id)
    } else if (flippedCard.length === 1) {
      flipCard(card?.id)
      checkForMatch(card)
    }
  }
  const flipCard = (id) => {
    setCards((prevCard) => prevCard.map(card => card?.id === id ? { ...card, flipped: !card?.flipped } : card))
  }

  const checkForMatch = (secondCard) => {
    setDisabled(true)
    const firstCard = flippedCard[0]

    if (firstCard.cardImage === secondCard.cardImage) {
      setCards((prevCard) => prevCard.map(card => {
        card.cardImage === firstCard.cardImage ? { ...card, matched: true, flipped: true } : card
      }))
    }
    setTimeout(() => {
      setCards(prevCard => prevCard.map(card => card?.id === firstCard?.id || card?.id === secondCard?.id ? { ...card, flipped: false } : card))
    }, 1000);
    setFlippedCard([])
    setDisabled(false)
  }

  return (
    <>
      <SubNavBar title="Memory Match Game" />
      <div className=" min-h-[calc(100vh-190px)] bgShadow w-[45%] mx-auto m-5 p-10 flex flex-col">
        <div className=" flex flex-wrap gap-5">
          {cards.map((card) => (
            <div
              className={`relative w-24 h-32 cursor-pointer ${disabled ? ' pointer-events-none' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <div className={` absolute inset-0 bg-white flex items-center justify-center rounded-lg transition-transform duration-300 ${flipped ? ' rotate-y-180' : ''}`}>
                <div className={` w-full h-full bg-blue-500 rounded-lg flex items-center justify-center text-3xl text-white ${flipped ? ' opacity-100' : ' opacity-0'}`}>
                  <img src={card?.cardImage} alt="" />
                </div>
              </div>
              <div className={` absolute inset-0 bg-gray-300 rounded-lg ${flipped ? ' opacity-0' : ' opacity-100'}`}></div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default MemoryMatch;

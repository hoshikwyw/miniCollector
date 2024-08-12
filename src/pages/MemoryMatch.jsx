import React, { useEffect, useState } from "react";
import SubNavBar from "../components/SubNavBar";
import "../components/css/memoryCard.css"

const MemoryMatch = () => {
  const [timetag, setTimeTag] = useState(20)
  let maxTime = 20
  let timeLeft = maxTime
  let flips = 0
  let matchedCard = 0
  let disabledDeck = false
  let isPlaying = false
  let cardOne, cardTwo, timer

  const initTime = () => {
    if(timeLeft <= 0) {
      return clearInterval(timer)
    }
    timeLeft--
    setTimeTag(timeLeft)
  }
  
  
  return (
    <>
      <SubNavBar title="Memory Match Game" />
      <div className=" min-h-[calc(100vh-190px)] bgShadow w-[45%] mx-auto m-5 p-10 flex flex-col">
        <div className=" wrapper mx-auto">
          <ul className="cards">
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-1.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-2.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-3.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-4.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-5.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-6.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-5.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-6.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-1.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-2.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-3.png" alt="card-img" />
              </div>
            </li>
            <li className="card">
              <div className="view front-view">
                <img src="/MemoryImages/que_icon.svg" alt="icon" />
              </div>
              <div className="view back-view">
                <img src="/MemoryImages/img-4.png" alt="card-img" />
              </div>
            </li>
            <div className="details">
              <p className="time">Time : <span><b>20</b>s</span></p>
              <p className="flips">Flips : <span><b>0</b></span></p>
              <button>Refresh</button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MemoryMatch;

import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../components/stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState({
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let { milliseconds, seconds, minutes, hours } = prevTime;
          milliseconds += 10;
          if (milliseconds >= 1000) {
            seconds = (seconds + 1) % 60;
            if (seconds === 0) {
              minutes = (minutes + 1) % 60;
              if (minutes === 0) {
                hours += 1;
              }
            }
            milliseconds = 0;
          }
          return { milliseconds, seconds, minutes, hours };
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime({
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  };

  const formatTime = ({ hours, minutes, seconds, milliseconds }) => {
    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} : ${milliseconds
      .toString()
      .padStart(3, "0")}`;
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center bg-[#67A2E7]">
      <div className="container w-[50%] h-fit p-10 flex flex-col justify-center items-center gap-5">
        <h2 className=" font-mono uppercase font-bold text-2xl tracking-wider text-[#fff]">
          StopWatch
        </h2>
        <div
          className="timer-display text-3xl tracking-wider text-[#eff2c6] font-semibold"
          ref={timerRef}>
          {formatTime(time)}
        </div>
        <div className="buttons flex gap-3">
          <button
            className=" bg-[#5f98ed] text-white px-3 py-1 rounded font-semibold"
            id="pause"
            onClick={pauseTimer}
            disabled={!isRunning}>
            Pause
          </button>
          <button
            className=" bg-[#5f98ed] text-white px-3 py-1 rounded font-semibold"
            id="start"
            onClick={startTimer}
            disabled={isRunning}>
            Start
          </button>
          <button
            className=" bg-[#5f98ed] text-white px-3 py-1 rounded font-semibold"
            id="reset"
            onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

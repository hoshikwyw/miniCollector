import React, { useEffect, useState } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hour = currentTime.getHours()
  const minute = currentTime.getMinutes()
  const second = currentTime.getSeconds()

  const ampm = hour >= 12 ? 'PM' : 'AM';

  const formatHour = hour % 12 || 12
  const formatMinute = minute < 10 ? `0${minute}` : minute
  const formatSecond = second < 10 ? `0${second}` : second

  return (
    <div className=" bgShadow w-full md:w-[50%] p-2 cursor-pointer">
      <h2 className=" text-center font-semibold text-3xl uppercase font-mono text-white">
        Yangon <span>time</span>
      </h2>
      <div className=" flex w-full justify-center items-center gap-3 my-2">
        <div className=" w-12 text-2xl bg-[#ffffffcb] h-12 flex justify-center items-center font-mono rounded-lg text-slate-600">
          {formatHour}
        </div>
        <h2 className=" text-3xl">:</h2>
        <div className=" w-12 text-2xl bg-[#ffffffcb] h-12 flex justify-center items-center font-mono rounded-lg text-slate-600">
          {formatMinute}
        </div>
        <h2 className=" text-3xl">:</h2>
        <div className=" w-12 text-2xl bg-[#ffffffcb] h-12 flex justify-center items-center font-mono rounded-lg text-slate-600">
          {formatSecond}
        </div>
        <div className=" text-3xl flex justify-center items-center font-semibold text-slate-800">
          {ampm}
        </div>
      </div>
    </div>
  );
};

export default Clock;

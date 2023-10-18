import React from "react";

const Clock = () => {

  const dateNow = new Date()

  return (
    <div className=" bgShadow w-[50%] p-2">
      <h2 className=" text-center font-semibold text-xl font-mono text-white">
        Yangon <span>time</span>
      </h2>
      <div className=" flex w-full justify-center items-center gap-3 my-2">
        <div className=" w-12 text-2xl bg-[#ffffffcb] text-center h-12 flex justify-center items-center font-mono rounded text-slate-600">
          00
        </div>
        <h2 className=" text-3xl">:</h2>
        <div className=" w-12 text-2xl bg-[#ffffffcb] text-center h-12 flex justify-center items-center font-mono rounded text-slate-600">
          00
        </div>
        <h2 className=" text-3xl">:</h2>
        <div className=" w-12 text-2xl bg-[#ffffffcb] text-center h-12 flex justify-center items-center font-mono rounded text-slate-600">
          00
        </div>
      </div>
    </div>
  );
};

export default Clock;

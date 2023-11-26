import React from "react";
import pfp from "../MemoryImages/card1.jpg";

const Profile = () => {
  return (
    <div className=" min-h:screen flex w-[95%] gap-[20px] mx-auto mt-5">
      <div className=" bgShadow h-[400px] w-[30%] p-5">
        <img src={pfp} alt="" className=" w-20 h-20 rounded-full" />
        <h2>Hello</h2>
      </div>
      <div className=" bgShadow h-[400px] w-[80%] p-5">
        <div className="">
          <h2>Recent Played : Tic Tac Toe </h2>
        </div>
        <div className="">
          <table className=" flex flex-col">
            <tr className=" flex gap-2 border bg-white">
              <th>Game</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
            <tr className=" flex gap-2 border bg-slate-500">
              <td>Snake</td>
              <td>10</td>
              <td>11:00</td>
            </tr>
            <tr className=" flex gap-2 border bg-slate-500">
              <td>Snake</td>
              <td>10</td>
              <td>11:00</td>
            </tr>
            <tr className=" flex gap-2 border bg-slate-500">
              <td>Snake</td>
              <td>10</td>
              <td>11:00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;

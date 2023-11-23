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
          <table>
            <tr>
              <th>Game</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;

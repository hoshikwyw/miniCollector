import React from "react";
import back from "../../assets/MemoryCards/back.jpg";
import card5 from "../../assets/MemoryCards/card5.jpg";

const MemoCards = ({ imagePath, isFlipped, onClick }) => {
  console.log(imagePath);
  return (
    <div
      className={` w-[100px] ${isFlipped ? "flipped" : ""}`}
      onClick={onClick}>
      {isFlipped ? (
        <img
          src={imagePath || card5}
          alt="Card"
        />
      ) : (
        <img src={back} alt="" />
      )}
    </div>
  );
};

export default MemoCards;

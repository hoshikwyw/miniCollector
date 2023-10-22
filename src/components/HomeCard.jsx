import React from "react";
import { links } from "../assets/PagesLinks";

const HomeCard = ({ image }) => {
  // console.log(links);
  return (
    <div className=" w-[200px] h-[200px] bgShadow group">
      <div className=" w-[180px] h-[180px] overflow-hidden mx-auto mt-[10px] rounded-2xl">
        <img
          src={image}
          alt=""
          className=" w-[180px] h-[180px] rounded-2xl brightness-50 group-hover:brightness-90 group-hover:scale-105 "
        />
      </div>
    </div>
  );
};

export default HomeCard;

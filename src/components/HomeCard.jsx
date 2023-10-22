import React from "react";
import { links } from "../assets/PagesLinks";

const HomeCard = ({image}) => {
  // console.log(links);
  return (
    <div className=" w-[200px] h-[200px] bgShadow">
      <img src={image} alt="" className=" w-[180px] h-[180px] rounded-2xl mx-auto mt-[10px] brightness-50" />
    </div>
  );
};

export default HomeCard;

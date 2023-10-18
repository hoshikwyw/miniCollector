import React from "react";
import HomeCard from "../components/HomeCard";
import { Link } from "react-router-dom";
import { links } from "../assets/PagesLinks";
import "../App.css"
import Clock from "../components/Clock";
import Weather from "../components/Weather";

const Home = () => {
  return (
    <div className=" bg-[#67A2E7] w-[80%] mx-auto py-2">
      <div className=" flex justify-between items-center gap-10">
        <Clock />
        <Weather />
      </div>
    <div className=" flex flex-wrap gap-5 py-5 items-center justify-center">
      {links?.map((page) => (
        <div className="">
          <Link
            to={page?.to}
            className=" flex flex-col w-full justify-center items-center">
            <HomeCard />
            <button className=" px-3 py-1 text-white font-semibold tracking-widest bgShadow mt-3">
              {page?.linkName}
            </button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;

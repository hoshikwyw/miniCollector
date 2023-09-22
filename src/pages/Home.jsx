import React from "react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import { Link } from "react-router-dom";
import { links } from "../assets/PagesLinks";

const Home = () => {
  return (
    <div className=" flex justify-center items-center flex-col w-full">
      <Navbar />
      <div className=" flex flex-wrap gap-5 mt-5 mx-5 justify-center">
        {links?.map((page) => (
          <div className="">
            <Link
              to={page?.to}
              className=" flex flex-col w-full justify-center items-center">
              <HomeCard />
              <button className=" bg-slate-500 px-3 py-1 rounded-md">
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

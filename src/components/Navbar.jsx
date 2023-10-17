import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" flex items-center gap-5 w-[80%] mx-auto py-2">
      <img
        src={logo}
        alt="logo-img"
        className=" w-[40px] h-[40px] rounded-md"
      />
      <h2 className=" font-semibold text-2xl font-serif">Oro's Tech</h2>
    </div>
  );
};

export default Navbar;

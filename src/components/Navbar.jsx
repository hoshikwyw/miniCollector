import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <img
        src={logo}
        alt="logo-img"
        className=" w-[50px] h-[50px] rounded-md"
      />
      <h2>Oro's Tech</h2>
    </div>
  );
};

export default Navbar;

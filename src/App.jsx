import React from "react";
import Path from "./redux/Path";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./components/style.css";
import BottomBar from "./components/BottomBar";

const App = () => {
  return (
    <div className=" relative flex">
      <div className=" bg-amber-200 w-[20%] sidebar">
        <SideBar />
      </div>
      <div className=" bottombar bg-sky-400">
        <BottomBar />
      </div>
      <div className=" bg-slate-50 w-full">
        <div className=" bg-slate-400">
          <Navbar />
        </div>
        <div className=" px-5">
          <Path />
        </div>
        <div className=" bg-green-200">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

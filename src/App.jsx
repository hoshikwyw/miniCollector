import React from "react";
import Path from "./redux/Path";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./components/style.css"

const App = () => {
  return (
    <div className=" relative flex">
      <div className=" bg-amber-200 w-full md:w-[200px] lg:w-[300px] sidebar">
        <SideBar />
      </div>
      <div className=" bg-slate-50">
        <div className=" bg-slate-400">
          <Navbar />
        </div>
        <div className=" bg-red-300">
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

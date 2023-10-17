import React from "react";
import Path from "./redux/Path";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/style.css";
import SideBar from "./components/SideBar";
import "./App.css"

const App = () => {
  return (
    <div className=" relative flex bg-[#67A2E7] overflow-x-hidden">
      <SideBar />
      <div className=" w-full">
        <div className=" bg-[#ffffff72] shadow-md">
          <Navbar />
        </div>
        <div className="">
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

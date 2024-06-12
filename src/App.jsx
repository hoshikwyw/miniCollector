import React from "react";
import Path from "./redux/Path";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import "./App.css"

const App = () => {
  return (
    <div className=" relative flex mainBg overflow-x-hidden ">
      <SideBar />
      <div className=" w-full">
        <div className=" bg-[#ffffff72] shadow-md">
          <Navbar />
        </div>
        <div className=" min-h-screen">
          <Path />
        </div>
        <div className=" bg-[#cde7fcc8] shadow-md">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

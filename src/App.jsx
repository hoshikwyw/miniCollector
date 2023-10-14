import React from "react";
import Path from "./redux/Path";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./components/style.css";

const App = () => {
  return (
    <div className=" relative flex bg-[#67A2E7]">
      <div className=" bg-slate-50 w-full">
        <div className=" bg-slate-400">
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

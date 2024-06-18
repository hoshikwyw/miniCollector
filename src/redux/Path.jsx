import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";
import MeterBill from "../pages/MeterBill";
import Stopwatch from "../pages/Stopwatch";
import CurrencyExchange from "../pages/CurrencyExchange";
import Calculator from "../pages/Calculator";
import AreaCalculate from "../pages/AreaCalculate";
import TicTacToe from "../pages/TicTacToe";
import Home from "../pages/Home";
import MemoryMatch from "../pages/MemoryMatch";
import SnakeGame from "../pages/SnakeGame";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Ads from "../pages/Ads";
import Flashlight from "../pages/Flashlight";
import GridDraw from "../pages/GridDraw";
import TextEditor from "../pages/TextEditor";
import QrCodeGenerator from "../pages/QrCodeGenerator";
import HangmanGame from "../pages/HangmanGame";
import TypeTest from "../pages/TypeTest";

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toDoList" element={<TodoList />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
          <Route path="/snakeGame" element={<SnakeGame />} />
          <Route path="/meterBill" element={<MeterBill />} />
          <Route path="/stopWatch" element={<Stopwatch />} />
          <Route path="/currencyExchange" element={<CurrencyExchange />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/areaCalculator" element={<AreaCalculate />} />
          <Route path="/memoryMatch" element={<MemoryMatch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/flashLight" element={<Flashlight />} />
          <Route path="/gridDraw" element={<GridDraw />} />
          <Route path="/textEditor" element={<TextEditor />} />
          <Route path="/qrGenerate" element={<QrCodeGenerator />} />
          <Route path="/hangmanGame" element={<HangmanGame />} />
          <Route path="/typeTest" element={<TypeTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Path;

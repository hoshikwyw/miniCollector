import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";
import MeterBill from "../pages/MeterBill";
import Stopwatch from "../pages/Stopwatch";
import CurrencyExchange from "../pages/CurrencyExchange";
import Calculator from "../pages/Calculator";
import AreaCalculate from "../pages/AreaCalculate";
import Invoice from "../pages/Invoice";
import TicTacToe from "../pages/TicTacToe";
import Piano from "../pages/Piano";
import Home from "../pages/Home";
import MemoryMatch from "../pages/MemoryMatch";
import SnakeGame from "../pages/SnakeGame";

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
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/memoryMatch" element={<MemoryMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Path;

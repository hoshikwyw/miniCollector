import React, { useState } from "react";
import SubNavBar from "../components/SubNavBar";

const Calculator = () => {
  const [state, setState] = useState({
    currentValue: "0",
    operator: null,
    previousValue: null,
    isOperatorClicked: false,
    expression: "",
  });

  const handleNumber = (value) => {
    setState((prevState) => ({
      ...prevState,
      currentValue:
        prevState.currentValue === "0" || prevState.isOperatorClicked
          ? value
          : prevState.currentValue + value,
      isOperatorClicked: false,
      expression: prevState.expression + value,
    }));
  };

  const handleOperator = (operator) => {
    setState((prevState) => ({
      ...prevState,
      operator: operator,
      previousValue: prevState.currentValue,
      isOperatorClicked: true,
      expression: prevState.expression + " " + operator + " ",
    }));
  };

  const handleEqual = () => {
    const { currentValue, operator, previousValue, expression } = state;

    if (operator) {
      const result = performOperation(
        parseFloat(previousValue),
        operator,
        parseFloat(currentValue)
      );

      setState({
        currentValue: result.toString(),
        operator: null,
        previousValue: null,
        isOperatorClicked: false,
        expression: expression + " = " + result,
      });
    }
  };

  const handleClear = () => {
    setState({
      currentValue: "0",
      operator: null,
      previousValue: null,
      isOperatorClicked: false,
      expression: "",
    });
  };

  const performOperation = (num1, operator, num2) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        }
        return "Error";
      default:
        return num2;
    }
  };

  return (
    <>
      <SubNavBar title="calculator" />
      <div className=" min-h-[calc(100vh-190px)] bgShadow w-[45%] mx-auto m-5 p-10 flex flex-col gap-10">
        <input
          type="text"
          value={state.expression}
          readOnly
          className="bg-white/30 border border-white shadow-md rounded-lg p-3 w-[79%] mx-auto mb-5 flex justify-center items-center font-semibold text-2xl outline-none"
        />

        <div className=" flex flex-col text-xl gap-5 w-[80%] mx-auto">
          <div className=" flex justify-between">
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("1")}>1</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("2")}>2</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("3")}>3</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleOperator("+")}>+</button>
          </div>
          <div className=" flex justify-between">
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("4")}>4</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("5")}>5</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("6")}>6</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleOperator("-")}>-</button>
          </div>
          <div className=" flex justify-between">
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("7")}>7</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("8")}>8</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("9")}>9</button>
            <button className=" bg-white/30 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleOperator("*")}>*</button>
          </div>
          <div className=" flex justify-between">
            <button className=" bg-red-600/50 text-white px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleClear()}>C</button>
            <button className=" bg-white/50 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleNumber("0")}>0</button>
            <button className=" bg-blue-950/40 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleEqual()}>=</button>
            <button className=" bg-white/50 px-5 py-2 rounded-md shadow-md w-28 h-14 font-semibold text-lg" onClick={() => handleOperator("/")}>/</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;

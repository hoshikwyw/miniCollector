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
    <div className=" min-h-[calc(100vh-200px)] bgShadow w-[50%] mx-auto m-5 py-3">
       <input
        type="text"
        value={state.expression} // Display the expression
        readOnly
        className="w-[80%] mx-auto flex justify-center items-center px-3 py-1"
      />
      {/* <input
        type="text"
        value={state.currentValue}
        readOnly
        className=" w-[80%] mx-auto flex justify-center items-center px-3 py-1"
      /> */}
      <div className=" flex flex-col text-xl gap-2 w-[90%] mx-auto">
        <div className=" flex justify-between">
          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>
        <div className=" flex justify-between">
          <button onClick={() => handleNumber("4")}>4</button>
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
        </div>
        <div className=" flex justify-between">
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>
          <button onClick={() => handleOperator("*")}>*</button>
        </div>
        <div className=" flex justify-between">
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleEqual()}>=</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Calculator;

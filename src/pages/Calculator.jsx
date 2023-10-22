import React, { useState } from 'react'

const Calculator = () => {

  const [state, setState] = useState({
    currentValue: '0',
    operator: null,
    previousValue: null,
  });

  const handleNumber = (value) => {
    setState((prevState) => ({
      ...prevState,
      currentValue: prevState.currentValue === '0' ? value : prevState.currentValue + value,
    }));
  };

  const handleOperator = (operator) => {
    setState((prevState) => ({
      ...prevState,
      operator: operator,
      previousValue: prevState.currentValue,
    }));
  };

  const handleEqual = () => {
    const { currentValue, operator, previousValue } = state;

    switch (operator) {
      case '+':
        setState((prevState) => ({
          ...prevState,
          currentValue: Number(prevState.currentValue) + Number(prevState.previousValue),
        }));
        break;
      case '-':
        setState((prevState) => ({
          ...prevState,
          currentValue: Number(prevState.previousValue) - Number(prevState.currentValue),
        }));
        break;
      case '*':
        setState((prevState) => ({
          ...prevState,
          currentValue: Number(prevState.previousValue) * Number(prevState.currentValue),
        }));
        break;
      case '/':
        setState((prevState) => ({
          ...prevState,
          currentValue: Number(prevState.previousValue) / Number(prevState.currentValue),
        }));
        break;
      default:
        break;
    }
  };

  const handleClear = () => {
    setState({
      currentValue: '0',
      operator: null,
      previousValue: null,
    });
  };

  return (
    <div>
      <input type="text" value={state.currentValue} readOnly />
      <button onClick={() => handleNumber('1')}>1</button>
      <button onClick={() => handleNumber('2')}>2</button>
      <button onClick={() => handleNumber('3')}>3</button>
      <button onClick={() => handleOperator('+')}>+</button>
      <button onClick={() => handleNumber('4')}>4</button>
      <button onClick={() => handleNumber('5')}>5</button>
      <button onClick={() => handleNumber('6')}>6</button>
      <button onClick={() => handleOperator('-')}>-</button>
      <button onClick={() => handleNumber('7')}>7</button>
      <button onClick={() => handleNumber('8')}>8</button>
      <button onClick={() => handleNumber('9')}>9</button>
      <button onClick={() => handleOperator('*')}>*</button>
      <button onClick={() => handleClear()}>C</button>
      <button onClick={() => handleNumber('0')}>0</button>
      <button onClick={() => handleEqual()}>=</button>
      <button onClick={() => handleOperator('/')}>/</button>
    </div>
  )
}

export default Calculator

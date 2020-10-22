import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");

  const clear = () => {
    setNumber("");
  }

  const zero = () => {
    setNumber(number + "0");
  }

  const one = () => {
    setNumber(number + "1");
  }

  const two = () => {
    setNumber(number + "2");
  }

  const three = () => {
    setNumber(number + "3");
  }

  const four = () => {
    setNumber(number + "4");
  }

  const five = () => {
    setNumber(number + "5");
  }

  const six = () => {
    setNumber(number + "6");
  }

  const seven = () => {
    setNumber(number + "7");
  }

  const eight = () => {
    setNumber(number + "8");
  }

  const nine = () => {
    setNumber(number + "9");
  }

  const add = () => {
    setOperator("add")
    setSecondNumber(number)
    setNumber("")
  }

  const subtract = (event) => {
    setOperator("subtract")
    setSecondNumber(number)
    setNumber("")
  }

  const multiply = (event) => {
    setOperator("multiply")
    setSecondNumber(number)
    setNumber("")
  }

  const divide = (event) => {
    setOperator("divide")
    setSecondNumber(number)
    setNumber("")
  }

  const equals = () => {

    if (operator === "add") {
      setNumber(Number(secondNumber) + Number(number))
    }

    if (operator === "subtract") {
      setNumber(Number(secondNumber) - Number(number))
    }

    if (operator === "multiply") {
      setNumber(Number(secondNumber) * Number(number))
    }

    if (operator === "divide") {
      setNumber(Number(secondNumber) / Number(number))
    }
  }

  return (
    <div className="main">
      <div className="title">
        <h1>Calculator</h1>
      </div>
      <div className="calculator">
        <input type="text" className="input" value={number} readOnly /><p></p>
        <div className="buttonContainer">
          <button className="button2" onClick={add}>+</button>
          <button className="button2" onClick={subtract}>-</button>
          <button className="button2" onClick={multiply}>*</button>
          <button className="button2" onClick={divide}>/</button>
          <button className="button2" onClick={clear}>C</button>
          <button className="button" onClick={zero} value="0">0</button>
          <button className="button" onClick={one} value="1">1</button>
          <button className="button" onClick={two} value="2">2</button>
          <button className="button" onClick={three} value="3">3</button>
          <button className="button" onClick={four} value="4">4</button>
          <button className="button" onClick={five} value="5">5</button>
          <button className="button" onClick={six} value="6">6</button>
          <button className="button" onClick={seven} value="7">7</button>
          <button className="button" onClick={eight} value="8">8</button>
          <button className="button" onClick={nine} value="9">9</button>
          <button className="button2" onClick={equals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
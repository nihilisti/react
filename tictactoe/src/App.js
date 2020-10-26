import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [sign3, setSign3] = useState("");
  const [sign4, setSign4] = useState("");
  const [sign5, setSign5] = useState("");
  const [sign6, setSign6] = useState("");
  const [sign7, setSign7] = useState("");
  const [sign8, setSign8] = useState("");
  const [sign9, setSign9] = useState("");

  const [turn, setTurn] = useState("X");

  const clearBoard = () => {
    setSign1("");
    setSign2("");
    setSign3("");
    setSign4("");
    setSign5("");
    setSign6("");
    setSign7("");
    setSign8("");
    setSign9("");
    
    setTurn("X");
  }

  const squareClick = () => {

    if (sign1 === "") {
      setSign1(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign1 === "X" || sign1 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square2Click = () => {

    if (sign2 === "") {
      setSign2(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign2 === "X" || sign2 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square3Click = () => {

    if (sign3 === "") {
      setSign3(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign3 === "X" || sign3 === "0") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square4Click = () => {

    if (sign4 === "") {
      setSign4(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign4 === "X" || sign4 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square5Click = () => {

    if (sign5 === "") {
      setSign5(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign5 === "X" || sign5 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }

  }

  const square6Click = () => {

    if (sign6 === "") {
      setSign6(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign6 === "X" || sign6 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square7Click = () => {

    if (sign7 === "") {
      setSign7(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign7 === "X" || sign7 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square8Click = () => {

    if (sign8 === "") {
      setSign8(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign8 === "X" || sign8 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const square9Click = () => {

    if (sign9 === "") {
      setSign9(turn)
        if (turn === "X") {
          setTurn("O")
      } else {
        setTurn("X")
      }
    }

    if (sign9 === "X" || sign9 === "O") {
      alert("This space is already filled. Try clicking somewhere else.");
    }
  }

  const Narrator = () => {

    if (sign1 === "X" && sign2 === "X" && sign3 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign1 === "O" && sign2 === "O" && sign3 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign1 === "X" && sign4 === "X" && sign7 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign1 === "O" && sign4 === "O" && sign7 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign1 === "X" && sign5 === "X" && sign9 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign1 === "O" && sign5 === "O" && sign9 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign2 === "X" && sign5 === "X" && sign8 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign2 === "O" && sign5 === "O" && sign8 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign3 === "X" && sign6 === "X" && sign9 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign3 === "O" && sign6 === "O" && sign9 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign3 === "X" && sign5 === "X" && sign7 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign3 === "O" && sign5 === "O" && sign7 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign4 === "X" && sign5 === "X" && sign6 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign4 === "O" && sign5 === "O" && sign6 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (sign7 === "X" && sign8 === "X" && sign9 === "X") {
      return "Tic tac toe! Game ended.";
    }

    if (sign7 === "O" && sign8 === "O" && sign9 === "O") {
      return "Tic tac toe! Game ended.";
    }

    if (turn === "X") {
      return "Player 1's turn.";
    }
    if (turn === "O") {
      return "Player 2's turn.";
    }
  }

  return (
    <div>
      <h1>tic tac toe</h1>
      <div className="narratorBox">
      <span className="narratorText">{Narrator()}</span>
      </div>
      <div className="ticTacToe">
        <div className="column">
          <span className="square" onClick={squareClick}>{sign1}</span>
          <span className="square" onClick={square2Click}>{sign2}</span>
          <span className="square" onClick={square3Click}>{sign3}</span>
        </div>
        <div class="column">
          <span className="square" onClick={square4Click}>{sign4}</span>
          <span className="square" onClick={square5Click}>{sign5}</span>
          <span className="square" onClick={square6Click}>{sign6}</span>
        </div>
        <div class="column">
          <span className="square" onClick={square7Click}>{sign7}</span>
          <span className="square" onClick={square8Click}>{sign8}</span>
          <span className="square" onClick={square9Click}>{sign9}</span>
        </div>
      </div><p></p>
      <div className="buttons">
        <button className="button" onClick={clearBoard}>Start over</button>
      </div>
    </div>
  );
}

export default App;

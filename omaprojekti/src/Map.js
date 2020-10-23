import React, { useEffect } from 'react';
import {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function Map() {

const [button, setButtons] = useState(["Jarno", "Pekka", "Jarno", "Pekka", "Jarno", "Pekka", "Jarno", "Pekka"])

const buttonPressed = (index) => () => {
  console.log("ok")
  let newList = button.concat([button[index]])
  setButtons(newList)
}

const anotherButtonPressed = () => {
  let jarnoList = button.filter(item => item == "Jarno")
  setButtons(jarnoList)
}

  return (
    <div>
      {button.map((button, index) => <button key={index} onClick={buttonPressed(index)}>{button}</button>)}
      <button onClick={anotherButtonPressed}>Näytä vain Jarnot</button>
    </div>
  );
}

export default Map;
import React, { useEffect } from 'react';
import {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {

  const divStyle = {
    margin: '40px 40px 40px 40px',
    padding: '10px 10px 10px 10px',
    border: '1px black solid',
    width: '20em',
  };

  const inputStyle = {
    border: '1px black solid',
  };

  //array destructuring
  const [brutto, setBrutto] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [taxTotal, setTaxTotal] = useState(0);
  useEffect(()=>{
    calculateTax();
  }, [brutto, taxPercentage]);

  const calculateTax = () => {
    let tax = brutto * taxPercentage / 100;
    setTaxTotal(tax);
  }

  const taxPerChanged = (event) => {
    setTaxPercentage(event.target.value);
  }

  const salaryChanged = (event) => {
    setBrutto(event.target.value);
  }

  return (
    <div style={divStyle}>
      <h2>Veroprosenttilaskuri</h2><p>
      </p>
      <label>Bruttopalkka</label><br></br>
      <input style={inputStyle} onChange={(event)=>salaryChanged(event)} value={brutto} type="number"></input><p></p>

      <label>Veroprosentti</label><br></br>
      <input style={inputStyle} onChange={(event)=>taxPerChanged(event)} value={taxPercentage} type="number"></input><p></p>

      <p>Verojen määrä: {taxTotal}</p>
    </div>
  );
}

export default App;
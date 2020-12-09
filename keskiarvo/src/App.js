import { useState, useReducer } from 'react';
import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get("http://localhost:5000/tiedot")
      setData(result.data)
    }
    fetchData();
  }, [])

  return (
    <div className="main">
      <div>
        <table>
          <tbody>
            <tr>
              <th>Etunimi</th>
              <th>Sukunimi</th>
              <th>Keskiarvo</th>
            </tr>
            {data.map((data, index) =>
              <tr key={index}>
                <td>{data.etunimi}</td>
                <td>{data.sukunimi}</td>
                <td>{data.tulos}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
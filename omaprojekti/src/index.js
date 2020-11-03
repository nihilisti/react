import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ObjectTehtava from './ObjectTehtava';
import Objection from './Object';
// import App from './App';
// import Map from './Map';
// import DataGrid from './GridDemo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Objection />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/css/App.css';
import BMRCalc from './modules/BMRCalc/bmrCalc';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <BMRCalc/>
      </div>
    </div>
  );
}

export default App;

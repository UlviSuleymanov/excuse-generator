import axios from 'axios';
import { useState } from 'react';
import './App.css';
function App() {
  const [makeExcuse, setMakeExcuse] = useState('');
  const fetchExcuse = (excuse) => {
    axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
      setMakeExcuse(res.data[0].excuse);
    });
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '1rem' }}>Make an Excuse</h1>
      <div className="btns">
        <button className="btn" onClick={() => fetchExcuse('party')}>
          Party
        </button>
        <button className="btn" onClick={() => fetchExcuse('family')}>
          Family
        </button>
        <button className="btn" onClick={() => fetchExcuse('office')}>
          Office
        </button>
        <button className="btn" onClick={() => fetchExcuse('college')}>
          College
        </button>
      </div>
      <p className="content">{makeExcuse}</p>

      <h3 style={{ textAlign: 'center', margin: '1rem' }}>
        Made by <a href="https://github.com/UlviSuleymanov">Ulvi Suleymanov</a>
      </h3>
    </div>
  );
}

export default App;

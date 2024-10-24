import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AuraButton from './components/AuraButton';

function App() {
  const name = "Taufiq";
  const [aura, setAura] = useState(0);
  const auraList = [1, 10, 100, 1000, -1, -10, -100, -1000];

  const changeAura = (additionalAura) => {
    setAura(aura + additionalAura);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aku <b>{name}</b>, dan aku adalah MC di dunia ini!!!!
        </p>
        <p>My Aura:</p>
        <h1>{aura}</h1>
        <div className="row">
          {auraList.map((aura) => (
            <div className='col-3 my-1'>
              <AuraButton aura={aura} changeAura={changeAura} />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AuraButton from './components/AuraButton';
import Explore from './pages/Explore';

function Home() {
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
        <Link className="App-link" to={`/${name}/explore`}>
          {"Let's explore!"}
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Fragment>
          <Route path="/" element={<Home />} />
          <Route path="/:name/explore" element={<Explore />} />
        </Fragment>
      </Routes>
    </Router>
  );
}

export default App;

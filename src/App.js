import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './components/pages/Team';
import Papers from './components/pages/Papers';
import Instrument from './components/pages/Instrument';
import Impressum from './components/pages/Impressum';
import Projekt from './components/pages/Projekt';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/team' exact element={<Team/>} />
          <Route path='/papers' exact element={<Papers/>} />
          <Route path='/instrument' exact element={<Instrument/>} />
          <Route path='/impressum' exact element={<Impressum/>} />
          <Route path='/projekt' exact element={<Projekt/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

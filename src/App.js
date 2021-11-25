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
import Contact from './components/pages/Contact';
import PetraKIPApp from './components/pages/PetraKIPApp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/petrakip-q" exact element={<Home/>}/>
          <Route path='/petrakip-q/team' exact element={<Team/>} />
          <Route path='/petrakip-q/papers' exact element={<Papers/>} />
          <Route path='/petrakip-q/instrument' exact element={<Instrument/>} />
          <Route path='/petrakip-q/impressum' exact element={<Impressum/>} />
          <Route path='/petrakip-q/projekt' exact element={<Projekt/>} />
          <Route path='/petrakip-q/contact' exact element={<Contact/>} />
          <Route path='/petrakip-q/app' exact element={<PetraKIPApp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

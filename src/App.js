import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact/>
      </Routes>      
      <Navbar/>
      <h1>Test</h1>
    </Router>
    </>
  );
}

export default App;

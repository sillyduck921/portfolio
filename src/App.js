import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Design from './pages/Design';
import Illustration from './pages/Illustration';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/design' element={<Design />} />
        <Route path='/illustration' element={<Illustration />} />
      </Routes>
    </Router>
  );
}

export default App;
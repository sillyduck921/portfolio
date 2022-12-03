import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Design from './pages/Design';
import Illustration from './pages/Illustration';
import Footer from './components/Footer';
import BreadAndButter from './pages/BreadAndButter';
import Heyfood from './pages/Heyfood';
import TheForager from './pages/TheForager';
import GradCenterBar from './pages/GradCenterBar';
import MailKiosk from './pages/MailKiosk';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/design' element={<Design />} />
        <Route path='/illustration' element={<Illustration />} />
        <Route path='/design/bread-and-butter' element={<BreadAndButter />} />
        <Route path='/design/heyfood' element={<Heyfood />} />
        <Route path='/design/the-forager-zine' element={<TheForager />} />
        <Route path='/design/grad-center-bar' element={<GradCenterBar />} />
        <Route path='/design/brown-mail-kiosk' element={<MailKiosk />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
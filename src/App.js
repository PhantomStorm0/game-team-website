import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Team from './pages/Team';

function App() {
  return (
    <Router>
            <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

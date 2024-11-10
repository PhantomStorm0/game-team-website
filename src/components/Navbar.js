import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Game Team</h1>
      <ul className="nav-links">
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/games">Oyunlar</Link></li>
        <li><Link to="/team">Ekibimiz</Link></li>
        <li><Link to="/contact">İletişim</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Clean Store</div>
      
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#categories">Categorías</a></li>
        <li><a href="#featured">Destacados</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="navbar-cart">
        <i className="fas fa-shopping-cart"></i> Carrito
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
}

export default Navbar;

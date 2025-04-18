import React, { useState } from "react";
import "./Header.styles.css";
import logo from "../../assests/logoImg.avif"; // Replace this with your logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="color"><a href="#home">Home</a></li>
            <li className="color"><a href="#about">About</a></li>
            <li className="color"><a href="#project">Project</a></li>
            <li className="color"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

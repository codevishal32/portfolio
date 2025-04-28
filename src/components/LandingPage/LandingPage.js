import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(true);
  const toggleMenu =() =>{
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="landing-page">
      {/* Top-left Logo */}
      <a href='#'><div className="logo">V</div></a>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-link'>
          <a href='#' ><div className=" mobile-nav">ABOUT</div></a>
          <a href='#'><div className=" mobile-nav">WORK</div></a>
          <a href='#' ><div className=" mobile-nav">CONTACT</div> </a>
        </div>
        <div className="mobile-menu-icons">
          <a href="https://www.github.com/codevishal32"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/curiosity-h"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </div>
      
      {/* Top-right WORK Link */}
      <a href='#'><div className="work-link">WORK</div></a>

      {/* Center Content */}
      <div className="center-content">
        <div className="floating-tag orange">Web Developer</div>
        <h1>VISHAL</h1>
        <div className="floating-tag blue">ML Enthusiast</div>
      </div>

      {/* Left Sidebar */}
      <div className="left-sidebar">
       <a href='#'> <div className="honors-box"><span className='w'>W.</span><br /><span>Honors</span></div></a>
      </div>

      {/* Social Media Links */}
      
      <div className="social-icons">
        <a href="https://www.github.com/codevishal32"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/curiosity-h"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
      </div>
      

      {/* Bottom */}
      <div className="bottom-links">
      
        <a href='#' ><div className=" link-bottom about-link">ABOUT</div></a>
    
        <a href='#' ><div className=" link-bottom scroll-down">SCROLL DOWN ↓</div> </a>
       
        <a href='#' ><div className=" link-bottom contact-link">CONTACT</div> </a>
    
      </div>
      
    </div>
  );
};

export default LandingPage;

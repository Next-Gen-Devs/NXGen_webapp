import React, { useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
    closeMobileMenu(); // Close mobile menu after clicking on a section
  };

  return (
    <div className="navbarContainer">
      <div className="mobileMenuButton" onClick={toggleMobileMenu}>
      <RxHamburgerMenu  color='white'/>
      </div>
      <ul className={`navList ${isMobileOpen ? 'mobileMenuOpen' : ''}`}>
        <li onClick={() => scrollToSection('section1')}>OUR VISION</li>
        <li onClick={() => scrollToSection('section2')}>SERVICES</li>
        <li onClick={() => scrollToSection('section3')}>OUR TEAM</li>
        <li onClick={() => scrollToSection('section4')}>CONTACT US</li>
      </ul>
    </div>
  );
}

export default Navbar;

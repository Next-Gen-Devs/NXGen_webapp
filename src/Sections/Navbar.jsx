import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { IoCloseOutline } from 'react-icons/io5';
import { RiMenu5Line } from "react-icons/ri";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const isNavListClickable = () => {
    const navList = document.querySelector('.navList');
    return navList && window.getComputedStyle(navList).getPropertyValue('opacity') !== '0';
  };

  return (
    <div className={`navbarContainer ${isScrolled ? 'scrolled' : ''}`}>
      <div className="mobileMenuButton" onClick={toggleMobileMenu}>
        {isMobileOpen ? (
          <IoCloseOutline className='closeIcon' size={25} color='white'/>
        ) : (
          <RiMenu5Line className='openIcon' size={25}/>
        )}
      </div>
      <div className={`navList ${isMobileOpen ? 'mobileMenuOpen' : ''}`}>
        <ul>
          <li onClick={() => isNavListClickable() && scrollToSection('section1')}>OUR VISION</li>
          <li onClick={() => isNavListClickable() && scrollToSection('section2')}>SERVICES</li>
          <li onClick={() => isNavListClickable() && scrollToSection('section3')}>OUR TEAM</li>
          <li onClick={() => isNavListClickable() && scrollToSection('section4')}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

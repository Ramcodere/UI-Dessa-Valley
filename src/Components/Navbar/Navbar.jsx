
import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navBarSection ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header container">
        <div className="logoDiv">
          <a href="#" className="logo">
            <MdOutlineTravelExplore className="icon" />
            <span className="logo-text">Dessa Valley</span>
          </a>
        </div>
        
        <div className={`navBar ${isMobileNavVisible ? 'activeNavbar' : ''}`}>
          <ul className="navLists">
            {['Home', 'Packages', 'About', 'Pages', 'Contact'].map((item, index) => (
              <li className="navItem" key={item}>
                <a href="#" className="navLink">
                  <span className="link-text">{item}</span>
                  <span className="link-hover"></span>
                </a>
              </li>
            ))}
            <button className="btn">
              <span className="btn-text">BOOK NOW</span>
              <div className="btn-overlay"></div>
            </button>
          </ul>
          <div className="closeNavbar" onClick={toggleNavbar}>
            <IoIosCloseCircleOutline className="icon" />
          </div>
        </div>
        
        <div className="toggleNavbar" onClick={toggleNavbar}>
          <TbGridDots className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
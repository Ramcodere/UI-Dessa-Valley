
import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false); // Initially false

  useEffect(() => {
    // Website load hone ke 2 second baad popup show hoga
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 2000); // 2 sec delay
    
    return () => clearTimeout(timer);
  }, []);

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

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  const handleGetQuote = () => {
    const message = encodeURIComponent("Hello, I want a free quote.");
    const whatsappUrl = `https://wa.me/918817766724?text=${message}`; 
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
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
              {['Home', 'Packages', 'About', 'Pages', 'Contact'].map((item) => (
                <li className="navItem" key={item}>
                  <a href={`#${item.toLowerCase()}`} className="navLink">
                    <span className="link-text">{item}</span>
                    <span className="link-hover"></span>
                  </a>
                </li>
              ))}
              <button className="btn" onClick={() => setPopupVisible(true)}>
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

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Get a Free Quote</h2>
            <p>Fill in your details and get a free quote now!</p>
            <button className="btn-quote" onClick={handleGetQuote}>Get Free Quote</button>
            <span className="popup-close" onClick={handlePopupClose}>&times;</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

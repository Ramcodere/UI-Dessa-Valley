
import React, { useState } from 'react';
import './navbar.scss';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isCardVisible, setCardVisible] = useState(false);

  // Toggle Navbar Visibility
  const toggleNavbar = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  // Show Detailed Card
  const showCard = () => {
    setCardVisible(true);
  };

  // Hide Detailed Card
  const closeCard = () => {
    setCardVisible(false);
  };

  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>
                <MdOutlineTravelExplore className="icon" /> Dessa Valley
              </h1>
            </a>
          </div>
          <div className={`navBar ${isMobileNavVisible ? 'activeNavbar' : ''}`}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink" onClick={showCard}>
                  Packages
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  About
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Pages
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              <button className="btn">
                <a href="#">BOOK NOW</a>
              </button>
            </ul>
            <div onClick={toggleNavbar} className="closeNavbar">
              <IoIosCloseCircleOutline className="icon" />
            </div>
          </div>
          <div onClick={toggleNavbar} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>

      
    </>
  );
};

export default Navbar;





import React, { useEffect } from 'react';
import './home.scss';

const Home = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add initial animation class after component mounts
    const timer = setTimeout(() => {
      document.querySelector('.slogan')?.classList.add('animate-in');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (

    <section className="home">
      <video 
        // src="https://videos.pexels.com/video-files/15907925/15907925-hd_1920_1080_30fps.mp4"
        src="https://cdn.pixabay.com/video/2023/10/25/186389-878016808_large.mp4"

        autoPlay 
        muted 
        loop 
        className="backgroundVideo"
      ></video>
      <div className="slogan">
        <h1 className="modern-title">
          <span className="title-part">Dessa</span>
          <span className="title-part">Valley</span>
        </h1>
        <div className="dynamic-line"></div>
        <p className="sub-title">Kashmir's Hidden Gem, Where You Discover Yourself!</p>
      </div>

      <div className="scroll-indicator" onClick={scrollToSection}>
        <div className="mouse"></div>
        <div className="arrow">⌄</div>
      </div>
    </section>



  );
};

export default Home;
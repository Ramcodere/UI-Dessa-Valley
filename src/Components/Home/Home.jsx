
// import React from 'react';
// import './home.scss';

// const Home = () => {
//   const scrollToSection = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <section className="home">
//       <div className="overlay"></div>
//       <video 
//         src="https://videos.pexels.com/video-files/15907925/15907925-hd_1920_1080_30fps.mp4"
//         type="video/mp4" 
//         autoPlay 
//         muted 
//         loop 
//         className="backgroundVideo"
//       ></video>
//       <div className="slogan">
//         <h1 className="main-title">Dessa Valley</h1>
//         <div className="blue-line"></div>
//         <p className="sub-title">Kashmir's Hidden Gem, Where You Discover Yourself!</p>
//       </div>
//       <div className="scroll-indicator" onClick={scrollToSection}>
//         <span className="scroll-text">Scroll Down</span>
//         <div className="arrow">&#8595;</div>
//       </div>
//     </section>
//   );
// };

// export default Home;


import React from 'react';
import './home.scss';

const Home = () => {
  const scrollToSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <video 
        src="https://videos.pexels.com/video-files/15907925/15907925-hd_1920_1080_30fps.mp4"
        type="video/mp4" 
        autoPlay 
        muted 
        loop 
        className="backgroundVideo"
      ></video>
      <div className="slogan">
        <h1 className="main-title">Dessa Valley</h1>
        <div className="blue-line"></div>
        <p className="sub-title">Kashmir's Hidden Gem, Where You Discover Yourself!</p>
      </div>
      <div className="scroll-indicator" onClick={scrollToSection}>
        <span className="scroll-text">Scroll Down</span>
        <div className="arrow">&#8595;</div>
      </div>
    </section>
  );
};

export default Home;

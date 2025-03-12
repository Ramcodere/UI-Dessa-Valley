

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

    <section className="home" id="home">
      <video 
        // src="../src/Materials/Video1.mp4"
          //  src="../src/Materials/Video1.mp4"
        // src="https://cdn.pixabay.com/video/2023/10/25/186389-878016808_large.mp4"
        // src="https://cdn.pixabay.com/video/2023/09/05/179200-861421736_large.mp4" 
        src="https://cdn.pixabay.com/video/2020/07/14/44702-439940419_large.mp4" 


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
        <p className="sub-title">Jammu Kashmir's Hidden Gem, Where You Discover Yourself!</p>
      </div>

      <div className="scroll-indicator" onClick={scrollToSection}>
        <div className="mouse"></div>
        <div className="arrow">⌄</div>
      </div>
    </section>



  );
};

export default Home;



// import React, { useEffect, useRef } from 'react';
// import './home.scss';

// const Home = () => {
//   const homeRef = useRef(null);

//   const scrollToSection = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: 'smooth',
//     });
//   };

//   // Handle wheel event for natural scroll
//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 0) {
//         scrollToSection();
//       }
//     };

//     window.addEventListener('wheel', handleWheel, { passive: true });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, []);

//   // Animation initialization
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       document.querySelector('.slogan')?.classList.add('animate-in');
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="home" ref={homeRef}>
//       <video 
//         src="https://cdn.pixabay.com/video/2023/10/25/186389-878016808_large.mp4"
//         autoPlay 
//         muted 
//         loop 
//         className="backgroundVideo"
//         playsInline // Add for mobile support
//       ></video>
      
//       <div className="slogan">
//         <h1 className="modern-title">
//           <span className="title-part">Dessa</span>
//           <span className="title-part">Valley</span>
//         </h1>
//         <div className="dynamic-line"></div>
//         <p className="sub-title">Kashmir's Hidden Gem, Where You Discover Yourself!</p>
//       </div>

//       <div className="scroll-indicator" onClick={scrollToSection} role="button" tabIndex={0}>
//         <div className="mouse"></div>
//         <div className="arrow">⌄</div>
//       </div>
//     </section>
//   );
// };

// export default Home;
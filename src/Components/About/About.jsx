
import React from 'react';
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <div className="secContainer">
        <h2 className="title">About Us</h2>
        <div className="content grid">
          {/* Video Section */}
          <div className="videoSection">
            <video src="https://videos.pexels.com/video-files/855916/855916-hd_1920_1080_30fps.mp4" 
                   controls 
                   autoPlay 
                   muted 
                   loop 
                   className="video">
            </video>
          </div>

          {/* Text Section */}
          <div className="textSection">
            <p>
              Welcome to Dessa Valley, your ultimate travel companion. Explore the world with us 
              and discover unforgettable experiences tailored just for you. Let’s make memories 
              together and bring your travel dreams to life.
            </p>
            <p>
              At Dessa Valley, we prioritize comfort, safety, and convenience, ensuring that your 
              journey is as enjoyable as your destination.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

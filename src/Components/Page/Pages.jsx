

import React, { useState } from 'react';
import './page.scss';

const Page = () => {
  const videos = [
    "https://videos.pexels.com/video-files/3563086/3563086-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/6502994/6502994-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/6614741/6614741-uhd_2560_1440_25fps.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <section className="videoSlider">
      <div className="heading">
        <h2>Memories</h2>
        <p>Dessa Valley Pictures</p>
      </div>

      <div className="sliderContainer">
        <video
          src={videos[currentIndex]}
          controls
          autoPlay
          muted
          loop
          className="sliderVideo"
        ></video>

        <div className="controls">
          <button onClick={handlePrev} className="prev" aria-label="Previous Video">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={handleNext} className="next" aria-label="Next Video">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="pagination">
          {videos.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;


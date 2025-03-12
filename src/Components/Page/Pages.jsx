

import React, { useState, useEffect, useCallback } from 'react';
import './page.scss';

const Page = () => {
  const videos = [
    "https://videos.pexels.com/video-files/3563086/3563086-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/6502994/6502994-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/6614741/6614741-uhd_2560_1440_25fps.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setIsFading(false);
    }, 500);
  }, []);

  const handlePrev = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
      setIsFading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="videoSlider" id="pages">
      <div className="heading">
        <h2>Memories</h2>
        <p>Dessa Valley Pictures</p>
      </div>

      <div className="sliderContainer">
        <div className="videoWrapper">
          {isLoading && <div className="loader"></div>}
          <video
            key={currentIndex}
            src={videos[currentIndex]}
            controls
            autoPlay
            muted
            loop
            className={`sliderVideo ${isFading ? 'fade-out' : ''}`}
            onLoadStart={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
            preload="auto"
          />
        </div>

        {/* Preload adjacent videos */}
        {videos.map((video, index) => (
          (index === (currentIndex + 1) % videos.length || 
           index === (currentIndex - 1 + videos.length) % videos.length) && (
            <video 
              key={`preload-${index}`}
              src={video}
              preload="auto"
              style={{ display: 'none' }}
            />
          )
        ))}

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
              onClick={() => {
                setIsFading(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsFading(false);
                }, 500);
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;


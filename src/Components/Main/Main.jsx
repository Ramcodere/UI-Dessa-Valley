
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './main.scss';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Main = () => {
  const tourPackages = [
    {
      id: 1,
      title: 'Beach Escape',
      description: 'Enjoy the serene beauty of sandy beaches and crystal-clear waters.',
      details: '1N Houseboat | 1N Sonamarg | 1N Gulmarg | 1N Pahalgam | 2N Srinagar',
      image: 'https://cdn.pixabay.com/photo/2019/03/12/17/05/himalaya-foothills-4051276_1280.jpg',
      price: '$299',
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Experience thrilling treks and breathtaking mountain views.',
      details: '1N Houseboat | 1N Sonamarg | 1N Gulmarg | 1N Pahalgam | 2N Srinagar',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$399',
    },
    {
      id: 3,
      title: 'Hills & Houseboat',
      description: 'A Luxury Tour to Kashmir - 6 Nights / 7 Days.',
      details: '1N Houseboat | 1N Sonamarg | 1N Gulmarg | 1N Pahalgam | 2N Srinagar',
      image: 'https://cdn.pixabay.com/photo/2015/07/08/12/23/nepal-836309_960_720.jpg',
      offer: '18% Off',
      price: '$549',
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      '.card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.card-container',
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="main">
      <h2 className="section-title">Explore Our Tour Packages</h2>
      <div className="card-container">
        {tourPackages.map(({ id, title, description, details, image, price, offer }) => (
          <div className="card" key={id}>
            <div className="image-container">
              <div className="image-overlay"></div>
              <img src={image} alt={title} className="card-image" />
              {offer && <div className="offer-tag">{offer}</div>}
              <div className="price-tag">{price}</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
              <p className="card-details">{details}</p>
              <div className="button-container">
                <button className="card-button">
                  Get Free Quote
                  <svg viewBox="0 0 24 24" className="arrow-icon">
                    <path d="M4 11v2h12l-5.5 5.5 1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5 16 11H4z" />
                  </svg>
                </button>
                <button className="whatsapp-button">
                  <svg viewBox="0 0 24 24" className="whatsapp-icon">
                    <path d="M19.05 4.91A9.816 9.816 0 0 0 12 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z" />
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;

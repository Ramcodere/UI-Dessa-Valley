
import React from 'react';
import './main.scss';

const Main = () => {
  const tourPackages = [
    {
      id: 1,
      title: 'Beach Escape',
      description: 'Enjoy the serene beauty of sandy beaches and crystal-clear waters.',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$299',
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Experience thrilling treks and breathtaking mountain views.',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$399',
    },
    {
      id: 3,
      title: 'City Lights',
      description: 'Explore vibrant cityscapes and indulge in urban luxury.',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$499',
    },
    {
      id: 4,
      title: 'Desert Safari',
      description: 'Embark on an exhilarating journey through the golden sands.',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$350',
    },
    {
      id: 5,
      title: 'Forest Retreat',
      description: 'Reconnect with nature in the heart of lush green forests.',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$450',
    },
    {
      id: 6,
      title: 'Island Getaway',
      description: 'Relax on tranquil islands with picturesque views.',
      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$550',
    },
  ];

  return (
    <section className="main">
      <h2 className="section-title">Tour Packages</h2>
      <div className="card-container">
        {tourPackages.map((packageItem) => (
          <div className="card" key={packageItem.id}>
            <img src={packageItem.image} alt={packageItem.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{packageItem.title}</h3>
              <p className="card-description">{packageItem.description}</p>
              <p className="card-price">{packageItem.price}</p>
              <button className="card-button">More Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;


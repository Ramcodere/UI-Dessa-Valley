

import React from 'react';
import './main.scss';

const Main = () => {
  const tourPackages = [
    {
      id: 1,
      title: 'Beach Escape',
      description: 'Enjoy the serene beauty of sandy beaches and crystal-clear waters. Enjoy the serene beauty of sandy beaches and crystal-clear waters. Enjoy the serene beauty of sandy beaches and crystal-clear waters.',
      details: 'Destination Covered:\n1N Houseboat | 1N Sonamarg | 1N Gulmarg | 1N Pahalgam | 2N Srinagar',

      image: 'https://cdn.pixabay.com/photo/2019/03/12/17/05/himalaya-foothills-4051276_1280.jpg',
      price: '$299',
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Experience thrilling treks and breathtaking Experience thrilling treks and breathtaking mountain views. mountain views. Enjoy the serene beauty of sandy beaches and crystal-clear waters. Enjoy the serene beauty of sandy',
      details: 'Destination Covered:\n1N Houseboat | 1N Sonamarg | 1N Gulmarg | 1N Pahalgam | 2N Srinagar',

      image: 'https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg',
      price: '$399',
    },
    {
      id: 3,
      title: 'Hills & Houseboat',
      description: 'A Luxury Tour to Kashmir\n6 Nights / 7 Days\nhotelHotel binocularsSightseeing mealMeal carTransfer. Experience thrilling treks and breathtaking mountain views. Experience thrilling treks and breathtaking mountain views.',
      details: 'Destination Covered:\n1N Houseboat | 1N Sonamarg | 1N Gulmarg | 1N Pahalgam | 2N Srinagar',
      image: 'https://cdn.pixabay.com/photo/2015/07/08/12/23/nepal-836309_960_720.jpg',
      offer: '18% Off',
      price: '$549',
    },
  ];

  return (
    <section className="main">
      <h2 className="section-title">Explore Our Tour Packages</h2>
      <div className="card-container">
        {tourPackages.map((packageItem) => (
          <div className="card" key={packageItem.id}>
            <div className="image-container">
              <img src={packageItem.image} alt={packageItem.title} className="card-image" />
              {packageItem.offer && <div className="offer-tag">{packageItem.offer}</div>}
              <div className="price-tag">{packageItem.price}</div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{packageItem.title}</h3>
              <p className="card-description">{packageItem.description}</p>
              {packageItem.details && <p className="card-details">{packageItem.details}</p>}
              <div className="button-container">
                <button className="card-button">Get Free Quote</button>
                <button className="whatsapp-button">WhatsApp</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;


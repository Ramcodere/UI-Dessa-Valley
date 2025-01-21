
import React from 'react';
import './footer.scss';
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsTelephone, BsGeoAlt } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <div className="inputDiv">
            <input type="email" placeholder="Enter your email address" />
            <button
              className="btn flex"
              onClick={() => window.open('https://www.linkedin.com', '_blank')}
            >
              Subscribe <FiSend className="icon" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footerGrid">
          {/* About Section */}
          <div className="about">
            <h3>Dessa Valley</h3>
            <p>
              Discover the world's most amazing destinations with us. Tailor-made experiences to make your journeys unforgettable. Discover the world's most amazing destinations with us. ys unforgettable. </p>
            <div className="socialIcons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact">
            <h3>Contact Us</h3>
            <p><BsTelephone className="icon" /> +09 876 543 210</p>
            <p><FaEnvelope className="icon" /> <a href="mailto:support@tourm.com">support@tourm.com</a></p>
            <p><BsGeoAlt className="icon" /> 789 Inner Lane, Holy Park, California, USA</p>
          </div>

          {/* Gallery Section */}
          <div className="gallery">
            <h3>Gallery</h3>
            <div className="galleryImages">
              <img src="https://cdn.pixabay.com/photo/2016/10/05/17/26/priest-1717195_960_720.jpg" alt="Gallery 1" />
              <img src="https://cdn.pixabay.com/photo/2024/05/10/09/22/mountains-8752573_960_720.jpg" alt="Gallery 2" />
              <img src="https://cdn.pixabay.com/photo/2019/03/12/17/05/himalaya-foothills-4051276_960_720.jpg" alt="Gallery 4" />

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <p>&copy; 2025 Dessa Valley. All Rights Reserved.</p>
          <p>Powered by <span className="highlight">Dessa Valley</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

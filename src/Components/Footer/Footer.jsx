

import React from 'react';
import './footer.scss';
import { FiSend } from 'react-icons/fi';
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { BsTelephone, BsGeoAlt } from 'react-icons/bs';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Subscribed with:", email); // Replace with API call or other logic
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <form onSubmit={handleSubscribe} className="inputDiv">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="btn flex">
              Subscribe <FiSend className="icon" />
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="footerGrid">
          {/* About Section */}
          <div className="about">
            <h3>Dessa Valley</h3>
            <p>
              Discover the world's most amazing destinations with us. Tailor-made experiences to make your journeys unforgettable.
            </p>

            <div className="socialIcons">
              <a href="https://www.instagram.com/dessa.valley_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="icon" />
              </a>
              <a href="https://www.facebook.com/share/1A4baR3ocg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="icon" />
              </a>
              <a href="https://www.youtube.com/@dessavalley" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="icon" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className="icon" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="quickLinks">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/main">Packages</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/page">Pages</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="contact">
            <h3>Contact Us</h3>
            <p><BsTelephone className="icon" /> +91 876 543 210</p>
            <p><FaEnvelope className="icon" /> <a href="mailto:support@tourm.com">desaavalley@tourm.com</a></p>
            <p><BsGeoAlt className="icon" /> Desaa Valley, Kashmir, INDIA</p>
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


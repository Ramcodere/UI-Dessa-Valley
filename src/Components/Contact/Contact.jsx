import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <section className="contactPage">
      <div className="contactContainer">
        {/* Left Side: Contact Form */}
        <div className="contactForm">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Feel free to reach out with any questions or inquiries.</p>
          <form>
            <div className="formGroup">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="contactImage">
          <img 
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
            alt="Contact Us" 
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

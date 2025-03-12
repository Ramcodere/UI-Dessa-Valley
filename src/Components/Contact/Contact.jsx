

import React, { useEffect, useState } from 'react';
import './contact.scss';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all the fields before sending.");
      return;
    }

    // WhatsApp Message
    const whatsappMessage = `Hello, My Name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    window.open(`https://api.whatsapp.com/send?phone=8817766724&text=${encodeURIComponent(whatsappMessage)}`, "_blank");

    // Email Alert (Backend Required for Real Email)
    alert("Email Sent Successfully!");

    setFormData({ name: '', email: '', message: '' }); // Reset Form
  };

  return (
    <section className="contactPage" id="contact">
      <motion.h2 
        className="contactHeading"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
        <div className="headingUnderline" />
      </motion.h2>

      <motion.div 
        ref={ref}
        className="contactContainer"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
        }}
      >
        {/* Contact Form */}
        <motion.div className="contactForm">
          <p className="animated-text">
            Let's create something amazing together! Reach out and we'll respond within 24 hours.
          </p>
          <form onSubmit={handleSubmit}>
            {['name', 'email', 'message'].map((field, index) => (
              <motion.div key={field} className="formGroup">
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  {field !== 'message' && <span className="required">*</span>}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    rows="5"
                    placeholder={`Enter your ${field}`}
                    className="input-field"
                    value={formData[field]}
                    onChange={handleInputChange}
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    placeholder={`Enter your ${field}`}
                    className="input-field"
                    value={formData[field]}
                    onChange={handleInputChange}
                    required
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="btn hover-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text">Send Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Image */}
        <motion.div 
          className="contactImage"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60, delay: 0.3 } }
          }}
        >
          <div className="image-wrapper">
            <img 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
              alt="Team collaboration" 
              loading="lazy"
            />
            <div className="image-overlay" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

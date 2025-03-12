
import React, { useState, useEffect } from "react";
import "./popup.scss";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Open popup after 2 seconds on page load
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    // Cleanup timer to avoid memory leaks
    return () => clearTimeout(popupTimer);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const { name, email, message } = formData;

    // Validate form fields
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // WhatsApp message link
    const whatsappMessage = `https://wa.me/918817766724?text=Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Email link
    const mailtoLink = `mailto:ramkushram120@gmail.com?subject=Free Quote Request&body=Name: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappMessage, "_blank");

    // Open Email in the same tab
    window.location.href = mailtoLink;

    // Close the popup
    setShowPopup(false);
  };

  // Close popup when clicking outside the content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setShowPopup(false);
    }
  };

  return (
    showPopup && (
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-content">
          <h2>Get a Free Quote</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Get Free Quotes
            </button>
          </form>
          <button
            className="close-btn"
            onClick={() => setShowPopup(false)}
            aria-label="Close popup"
          >
            ✖
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
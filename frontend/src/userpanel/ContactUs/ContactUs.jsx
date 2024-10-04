import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import Footer from '../Footer/Footer';
import DeveloperCarousel from '../DeveloperCarousel/DeveloperCarousel';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xMove = (clientX - window.innerWidth / 2) / 50;
      const yMove = (clientY - window.innerHeight / 2) / 50;
      const background = document.querySelector('.sketchfab-embed-wrapper iframe');
      if (background) {
        background.style.transform = `translate(${xMove}px, ${yMove}px) scale(1.1)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Background Sketchfab 3D Model */}
      <div className="sketchfab-embed-wrapper">
        <iframe
          title="modern apartment house building design"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/43232ebb8d3841a996a78b2c09a6dc84/embed?autospin=1&autostart=1&preload=1&ui_hint=0&ui_theme=dark"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="contact-container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="contact-title">CONTACT US</h1>

          <Tilt className="Tilt" options={{ max: 25, scale: 1.1, speed: 300 }}>
            <div className="Tilt-inner">
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <p>Phone: <a href="tel:+918087616057">+91-8087616057</a></p>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <p>Email: <a href="mailto:info@contourdirectindia.com">info@contourdirectindia.com</a></p>
                </div>
                <div className="contact-item">
                  <FaGlobe className="contact-icon" />
                  <p>Website: <a href="http://www.contourdirectindia.com" target="_blank" rel="noopener noreferrer">www.contourdirectindia.com</a></p>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <p>Address: B-84, Sector 2, Noida 201301, GautamBuddh Nagar</p>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Map and Contact Form in Black Transparent Box */}
      <motion.div
        className="contact-form-section"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="map-container">
          <h2 style={{color:'white'}}>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7541946659137!2d77.31702181501477!3d28.564453282460906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cecb05f5b693b%3A0xe30f4c9a5105e7e7!2sB-84%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sin!4v1681928559411!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-form">
          <h2 style={{color:'white'}}>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      <DeveloperCarousel/>
      <Footer />
    </div>
  );
};

export default ContactUs;

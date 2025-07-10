// src/components/common/Footer.jsx
import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowUnderline(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1 */}
          <div className="footer-column">
            <h3 className={showUnderline ? 'underline' : ''}>SageUp</h3>
            <p>Your trusted platform to discover and connect with the best coaching institutes worldwide.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3 className={showUnderline ? 'underline' : ''}>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3 className={showUnderline ? 'underline' : ''}>Top Categories</h3>
            <ul className="footer-links">
              <li><a href="#">Engineering Entrance</a></li>
              <li><a href="#">Medical Entrance</a></li>
              <li><a href="#">Government Exams</a></li>
              <li><a href="#">Study Abroad</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3 className={showUnderline ? 'underline' : ''}>Contact Us</h3>
            <ul className="footer-links">
              <li><FaMapMarkerAlt /> 123 Education Street, NY</li>
              <li><FaPhone /> +1 (555) 123-4567</li>
              <li><FaEnvelope /> info@sageup.com</li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2025 SageUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

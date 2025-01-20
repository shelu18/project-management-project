import React from 'react';
import './Footer.css'; // Optional: Include styles if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding or Logo */}
        <div className="footer-branding">
          <h3>Project Management App</h3>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <a href="/about" className="footer-link">
            About Us
          </a>
          <a href="/contact" className="footer-link">
            Contact Us
          </a>
          <a href="/terms" className="footer-link">
            Terms of Service
          </a>
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
        </div>

        {/* Copyright Info */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Project Management App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

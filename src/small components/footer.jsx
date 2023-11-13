import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css' 

const Footer = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to='/blog' className="blog">Blog</Link>
        <Link to='/faq' className="faq">FAQ</Link>
        <Link to='/check-api' className="faq">Check Api</Link>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
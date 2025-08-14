import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer my-5">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">CAR-BREEZY</h2>
          <p className="footer-description">
            Your trusted car marketplace for new and used vehicles. Drive your dream today.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/products/new" className="footer-link">New Cars</Link></li>
            <li><Link to="/products/used" className="footer-link">Used Cars</Link></li>
            <li><Link to="/products/brands" className="footer-link">Brands</Link></li>
            <li><Link to="/products/offers" className="footer-link">Offers</Link></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@carbreezy.com</p>
          <p>Phone: +234 703 697 4187</p>
          <p>Location: Lagos, Nigeria</p>
        </div>

 
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> © {new Date().getFullYear()} CarBreezy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
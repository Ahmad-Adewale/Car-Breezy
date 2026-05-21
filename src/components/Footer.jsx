import "../styles/footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* TOP AREA */}

        <div className="footer-top">

          {/* BRAND */}

          <div className="footer-brand">

            <span className="footer-subtitle">
              Luxury Automotive
            </span>

            <h2>
              CAR-BREEZY
            </h2>

            <p>
              Experience premium luxury vehicles
              designed for elegance, performance,
              and unforgettable driving moments.
            </p>

            {/* SOCIALS */}

            <div className="footer-socials">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* LINKS */}

          <div className="footer-links-wrapper">

            {/* QUICK LINKS */}

            <div className="footer-links">

              <h3>Quick Links</h3>

              <ul>

                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/products/new">
                    New Cars
                  </Link>
                </li>

                <li>
                  <Link to="/products/used">
                    Used Cars
                  </Link>
                </li>

                <li>
                  <Link to="/products/brands">
                    Brands
                  </Link>
                </li>

              </ul>

            </div>

            {/* SUPPORT */}

            <div className="footer-links">

              <h3>Support</h3>

              <ul>

                <li>
                  <a href="#">
                    Help Center
                  </a>
                </li>

                <li>
                  <a href="#">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#">
                    Contact Support
                  </a>
                </li>

              </ul>

            </div>

            {/* CONTACT */}

            <div className="footer-links">

              <h3>Contact</h3>

              <ul>

                <li>
                  Lagos, Nigeria
                </li>

                <li>
                  +234 703 697 4187
                </li>

                <li>
                  support@carbreezy.com
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* NEWSLETTER */}

        <div className="footer-newsletter glass">

          <div>

            <span className="footer-newsletter-subtitle">
              Stay Updated
            </span>

            <h3>
              Subscribe For Latest Offers
            </h3>

          </div>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Car-Breezy.
            All rights reserved.
          </p>

          <span>
            Designed For Luxury Driving
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
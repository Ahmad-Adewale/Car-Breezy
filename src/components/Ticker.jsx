import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/ticker.css";

const deals = [
  "20% Off on Tesla Models",
  "Free 1 Year Servicing",
  "Luxury Cars at Smart Prices",
  "Drive Now, Pay Later Available",
  "Exclusive SUV Weekend Discounts",
];

function Ticker() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Detecting location...");

  // LIVE CLOCK
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // LOCATION FETCH
  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setLocation(`${data.city}, ${data.country_name}`);
      } catch (error) {
        setLocation("Location unavailable");
      }
    };

    getLocation();
  }, []);

  return (
    <section className="ticker">
      <div className="ticker-left">
        <div className="ticker-badge">
          <FaClock />
          <span>{time.toLocaleTimeString()}</span>
        </div>

        <div className="ticker-divider"></div>

        <div className="ticker-location">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </div>

      <div className="ticker-marquee">
        <div className="ticker-track">
          {[...deals, ...deals].map((deal, index) => (
            <div className="ticker-item" key={index}>
              <FaBolt className="ticker-icon" />
              <span>{deal}</span>
              <FaArrowRight className="ticker-arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ticker;
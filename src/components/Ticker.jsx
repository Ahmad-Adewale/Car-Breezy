import React, { useState, useEffect } from "react";

export default function Ticker() {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("Loading location...");

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setLocation(`${data.city}, ${data.country_name}`);
      })
      .catch(() => setLocation("Unknown location"));
  }, []);

  return (
    <div className="ticker-wrapper">
      <span className="ticker-info">
        {time.toLocaleTimeString()} | {location} |
      </span>
      <div className="ticker-content">
         Hot Deals: 20% Off on All Tesla Models!  Toyota Summer Sale is Live! Free Servicing for 1 Year on Select Cars!  Luxury Cars at Affordable Prices!
      </div>
    </div>
  );
}

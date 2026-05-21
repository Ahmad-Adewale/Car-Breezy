import React, { useEffect, useState } from "react";
import {
  FaTimes,
  FaGasPump,
  FaCarSide,
  FaTachometerAlt,
  FaCogs,
} from "react-icons/fa";
import "../styles/product-details-page.css";

const ProductDetailsPage = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState("internal");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!product) return null;

  const tabs = [
    {
      key: "internal",
      label: "Interior",
      icon: <FaCarSide />,
    },
    {
      key: "external",
      label: "Exterior",
      icon: <FaTachometerAlt />,
    },
    {
      key: "engine",
      label: "Engine",
      icon: <FaCogs />,
    },
    {
      key: "dimensions",
      label: "Dimensions",
      icon: <FaGasPump />,
    },
  ];

  return (
    <div className="details-overlay">
      <div className="details-modal">

        {/* CLOSE BUTTON */}
        <button className="details-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* TOP SECTION */}
        <div className="details-top">

          {/* IMAGE */}
          <div className="details-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="details-main-image"
            />
          </div>

          {/* INFO */}
          <div className="details-info">

            <span className="details-badge">
              {product.tag || "Premium"}
            </span>

            <h2 className="details-title">
              {product.name}
            </h2>

            <p className="details-price">
              ₦ {product.price?.toLocaleString()}
            </p>

            <p className="details-description">
              Experience luxury, performance, and comfort with the
              {` ${product.name}`}. Built for drivers who demand
              elegance and power in one complete package.
            </p>

            {/* QUICK SPECS */}
            <div className="details-specs-grid">

              <div className="spec-card">
                <span>Transmission</span>
                <strong>Automatic</strong>
              </div>

              <div className="spec-card">
                <span>Fuel Type</span>
                <strong>Petrol</strong>
              </div>

              <div className="spec-card">
                <span>Condition</span>
                <strong>{product.tag}</strong>
              </div>

              <div className="spec-card">
                <span>Category</span>
                <strong>{product.type}</strong>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="details-actions">
              <button className="primary-btn">
                Place Order
              </button>

              <button className="secondary-btn">
                Save Car
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="details-tabs">

          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`details-tab-btn ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}

        </div>

        {/* TAB CONTENT */}
        <div className="details-content">

          <div className="details-content-image">
            <img
              src={product.specifications?.[activeTab]?.image}
              alt={activeTab}
            />
          </div>

          <div className="details-content-text">
            <h3>
              {tabs.find((t) => t.key === activeTab)?.label}
            </h3>

            <p>
              {
                product.specifications?.[activeTab]?.details
              }
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;
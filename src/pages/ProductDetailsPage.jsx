import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ProductDetailsPage = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState("internal");

  if (!product) return null;

  const tabs = [
    { key: "internal", label: "Internal Specification" },
    { key: "external", label: "External" },
    { key: "engine", label: "Engine" },
    { key: "dimensions", label: "Dimensions" }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>

        <img
          src={product.image}
          alt={product.name}
          className="main-image"
        />

        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <img
            src={product.specifications[activeTab].image}
            alt={activeTab}
            className="tab-image"
          />
          <p>{product.specifications[activeTab].details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

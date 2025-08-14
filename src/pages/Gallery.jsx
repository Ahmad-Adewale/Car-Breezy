import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductDetailsPage from "./ProductDetailsPage";
import products from "../product"; // default import from product.js

function Gallery() {
  const [type, setType] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Combine all products from new, used, and branded
  const allProducts = [
    ...(products.new || []),
    ...(products.used || []),
    ...(products.brands || [])
  ];

  // Filter products based on type dropdown
  const filteredProducts =
    type === "default"
      ? allProducts
      : allProducts.filter((p) => p.type === type);

  return (
    <>
      {/* TITLE */}
      <div className="row">
        <div className="section-title product-title text-center">
          <h2 className="fw-semibold fs-1 car-text">
            Explore Our Car Gallery
          </h2>
          <p className="text-muted">
            Select a car of your liking from our Gallery section
          </p>
        </div>
      </div>

      {/* FILTER */}
      <div className="search-bar">
        {/* TYPE */}
        <div className="search-field">
          <p className="field-label">Type (any)</p>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="field-select"
          >
            <option value="default">Select your type</option>
            <option value="Convertible">Convertible</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="product-container py-1 my-1">
        <div className="container position-relative">
          <div className="product-wraper">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="product-item text-center position-relative"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: "pointer" }}
              >
                <div className="product-image w-100 position-relative overflow-hidden">
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt={product.name}
                  />
                  {product.secondImage && (
                    <img
                      src={product.secondImage}
                      className="img-fluid second-image"
                      alt={product.name}
                    />
                  )}
                </div>
                <div className="product-content pt-3">
                  <h3 className="title pt-1">{product.name}</h3>
                  <p className="text-white">
                    {product.price
                      ? product.price.toLocaleString()
                      : "Price not available"}
                  </p>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <p className="text-center py-5">No products found.</p>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductDetailsPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default Gallery;

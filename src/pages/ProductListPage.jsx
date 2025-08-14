import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Product from "../product"; // { new: [...], used: [...], branded: [...] }
import ProductDetailsPage from "./ProductDetailsPage";

function ProductListPage() {
  const { section } = useParams(); // "new", "used", "branded"
  const [type, setType] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get only the products for the current section
  const productsInSection = Product[section] || [];

  // Filtering logic
  useEffect(() => {
    let filtered = productsInSection;

    // Filter by type
    if (type !== "default") {
      filtered = filtered.filter((p) => p.type === type);
    }

    setFilteredProducts(filtered);
  }, [section, type]);

  return (
    <>
      {/* TITLE */}
      <div className="row">
        <div className="section-title product-title text-center">
          <h2 className="fw-semibold fs-1 car-text">
            Explore Our {section.charAt(0).toUpperCase() + section.slice(1)} Cars
          </h2>
          <p className="text-muted">
            Select a car of your liking from our {section} section
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
                  <span className={`tag badge text-white ${product.tag === "New" ? "bg-danger" : "bg-success"}`}>
                      {product.tag}
                    </span>
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
                  <p className="text-white">{product.price.toLocaleString()}</p>
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

export default ProductListPage;

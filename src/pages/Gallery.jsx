import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaSlidersH,
  FaCarSide,
} from "react-icons/fa";

import products from "../product";
import ProductDetailsPage from "./ProductDetailsPage";
import "../styles/gallery.css"

function Gallery() {

  const [type, setType] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* =========================
     MERGE ALL PRODUCTS
  ========================= */

  const allProducts = useMemo(() => {
    return [
      ...(products.new || []),
      ...(products.used || []),
      ...(products.brands || []),
    ];
  }, []);

  /* =========================
     FILTER PRODUCTS
  ========================= */

  const filteredProducts = useMemo(() => {

    return allProducts.filter((product) => {

      const matchesType =
        type === "all"
          ? true
          : product.type === type;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesType && matchesSearch;

    });

  }, [allProducts, type, search]);

  return (
    <section className="gallery-section">

      {/* HERO */}
      <div className="gallery-hero">

        <span className="gallery-badge">
          Premium Collection
        </span>

        <h1 className="gallery-title">
          Explore Our Luxury Car Gallery
        </h1>

        <p className="gallery-subtitle">
          Browse through our premium collection of
          luxury vehicles crafted for comfort,
          elegance, and performance.
        </p>

      </div>

      {/* FILTER BAR */}
      <div className="gallery-filter-wrapper">

        {/* SEARCH */}
        <div className="gallery-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search your dream car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* TYPE FILTER */}
        <div className="gallery-select-wrapper">

          <FaSlidersH />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="gallery-select"
          >
            <option value="all">All Types</option>
            <option value="Convertible">Convertible</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
          </select>

        </div>

      </div>

      {/* RESULTS COUNT */}
      <div className="gallery-results">

        <p>
          <FaCarSide />
          Showing {filteredProducts.length} Cars
        </p>

      </div>

      {/* PRODUCT GRID */}
      <div className="gallery-grid">

        {filteredProducts.map((product, index) => (

          <div
            key={index}
            className="gallery-card"
            onClick={() => setSelectedProduct(product)}
          >

            {/* IMAGE */}
            <div className="gallery-image-wrapper">

              <img
                src={product.image}
                alt={product.name}
                className="gallery-image"
              />

              {product.secondImage && (
                <img
                  src={product.secondImage}
                  alt={product.name}
                  className="gallery-image-hover"
                />
              )}

              {/* OVERLAY */}
              <div className="gallery-overlay">

                <button className="gallery-view-btn">
                  View Details
                </button>

              </div>

              {/* BADGE */}
              <span
                className={`gallery-tag ${
                  product.tag === "New"
                    ? "new"
                    : "used"
                }`}
              >
                {product.tag}
              </span>

            </div>

            {/* CONTENT */}
            <div className="gallery-content">

              <h3>{product.name}</h3>

              <p className="gallery-type">
                {product.type}
              </p>

              <div className="gallery-bottom">

                <h4>
                  ₦{" "}
                  {product.price
                    ? product.price.toLocaleString()
                    : "N/A"}
                </h4>

                <span>
                  Explore →
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (

        <div className="gallery-empty">

          <h3>No Cars Found</h3>

          <p>
            Try adjusting your filters or search.
          </p>

        </div>

      )}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductDetailsPage
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </section>
  );
}

export default Gallery;
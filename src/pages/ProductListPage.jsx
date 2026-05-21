import React, { useMemo, useState } from "react";

import { useParams } from "react-router-dom";

import {
  FaFilter,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

import Product from "../product";

import ProductDetailsPage from "./ProductDetailsPage";

import "../styles/product-list-page.css";

function ProductListPage() {

  const { section } = useParams();

  const [type, setType] = useState("all");

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);

  /* PRODUCTS */

  const productsInSection = Product[section] || [];

  /* FILTERED PRODUCTS */

  const filteredProducts = useMemo(() => {

    return productsInSection.filter((product) => {

      const matchesType =
        type === "all" || product.type === type;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesType && matchesSearch;

    });

  }, [productsInSection, type, searchTerm]);

  /* FORMAT TITLE */

  const sectionTitle =
    section.charAt(0).toUpperCase() +
    section.slice(1);

  return (
    <section className="inventory section">

      <div className="container">

        {/* =====================
            HEADER
        ===================== */}

        <div className="inventory-header">

          <span className="inventory-subtitle">
            Premium Collection
          </span>

          <h1>
            Explore Our {sectionTitle} Cars
          </h1>

          <p>
            Browse luxury vehicles crafted
            for elegance, speed,
            and performance.
          </p>

        </div>

        {/* =====================
            FILTER BAR
        ===================== */}

        <div className="inventory-filter glass">

          {/* SEARCH */}

          <div className="inventory-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search luxury cars..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          {/* FILTER */}

          <div className="inventory-select">

            <FaFilter />

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            >

              <option value="all">
                All Types
              </option>

              <option value="Convertible">
                Convertible
              </option>

              <option value="Hatchback">
                Hatchback
              </option>

              <option value="Sedan">
                Sedan
              </option>

              <option value="SUV">
                SUV
              </option>

            </select>

          </div>

        </div>

        {/* =====================
            PRODUCT GRID
        ===================== */}

        <div className="inventory-grid">

          {filteredProducts.map((product, index) => (

            <div
              key={index}
              className="inventory-card"
              onClick={() =>
                setSelectedProduct(product)
              }
            >

              {/* IMAGE */}

              <div className="inventory-image-wrapper">

                <span
                  className={`inventory-tag ${
                    product.tag === "New"
                      ? "new-tag"
                      : "used-tag"
                  }`}
                >
                  {product.tag}
                </span>

                <img
                  src={product.image}
                  alt={product.name}
                  className="inventory-image primary-image"
                />

                {product.secondImage && (

                  <img
                    src={product.secondImage}
                    alt={product.name}
                    className="inventory-image secondary-image"
                  />

                )}

              </div>

              {/* CONTENT */}

              <div className="inventory-content">

                <div>

                  <span className="inventory-type">
                    {product.type}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                </div>

                <div className="inventory-bottom">

                  <div className="inventory-price">

                    ₦{product.price.toLocaleString()}

                  </div>

                  <button className="inventory-btn">

                    View Details

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* EMPTY STATE */}

        {filteredProducts.length === 0 && (

          <div className="inventory-empty glass">

            <h3>
              No Cars Found
            </h3>

            <p>
              Try changing your filters
              or search term.
            </p>

          </div>

        )}

      </div>

      {/* =====================
          MODAL
      ===================== */}

      {selectedProduct && (

        <ProductDetailsPage
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
        />

      )}

    </section>
  );
}

export default ProductListPage;
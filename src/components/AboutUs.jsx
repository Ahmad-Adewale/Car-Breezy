import "../styles/about.css";

import aboutImage from "../assets/images/Branded/SUV/Audi Q81.jpeg";

function AboutUs() {
  return (
    <section className="about section" id="about">

      <div className="container">

        <div className="about-wrapper">

          {/* IMAGE SIDE */}

          <div className="about-image-section">

            <img
              src={aboutImage}
              alt="Luxury Car"
              className="about-image"
            />

            {/* FLOATING CARD */}

            <div className="about-floating-card glass">

              <h3>15+</h3>

              <p>
                Years Of Premium
                Automotive Excellence
              </p>

            </div>

          </div>

          {/* CONTENT SIDE */}

          <div className="about-content">

            <span className="about-subtitle">
              About Car-Breezy
            </span>

            <h2>
              Redefining Luxury
              Driving Experience
            </h2>

            <p>
              At Car-Breezy, we believe every car
              tells a story of innovation,
              elegance, and performance.
            </p>

            <p>
              From luxury sedans to high-performance
              SUVs, we provide a curated collection
              of premium vehicles designed to elevate
              your driving experience.
            </p>

            {/* STATS */}

            <div className="about-stats">

              <div className="about-stat glass">

                <h3>500+</h3>

                <span>Luxury Cars</span>

              </div>

              <div className="about-stat glass">

                <h3>98%</h3>

                <span>Happy Clients</span>

              </div>

              <div className="about-stat glass">

                <h3>24/7</h3>

                <span>Support</span>

              </div>

            </div>

            {/* BUTTON */}

            <button className="btn-primary">
              Explore Inventory
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;
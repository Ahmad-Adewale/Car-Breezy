import "../styles/contact.css";

function ContactUs() {
  return (
    <section className="contact section" id="contact">

      <div className="container">

        {/* HEADER */}

        <div className="section-title">

          <span>Contact Us</span>

          <h2>
            Let’s Find Your
            Dream Car
          </h2>

          <p className="contact-description">
            Our team is ready to help you
            discover the perfect luxury vehicle.
          </p>

        </div>

        {/* CONTACT WRAPPER */}

        <div className="contact-wrapper">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <div className="contact-card glass">

              <div className="contact-icon">
                📍
              </div>

              <div>

                <h3>Visit Showroom</h3>

                <p>
                  123 Luxury Avenue,
                  Auto City
                </p>

              </div>

            </div>

            <div className="contact-card glass">

              <div className="contact-icon">
                📞
              </div>

              <div>

                <h3>Call Us</h3>

                <p>
                  +1 234 567 890
                </p>

              </div>

            </div>

            <div className="contact-card glass">

              <div className="contact-icon">
                📧
              </div>

              <div>

                <h3>Email Support</h3>

                <p>
                  support@carbreezy.com
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="contact-form-wrapper glass">

            <form className="contact-form">

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                />

              </div>

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your dream car..."
                ></textarea>

              </div>

              <button
                type="submit"
                className="btn-primary contact-btn"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactUs;
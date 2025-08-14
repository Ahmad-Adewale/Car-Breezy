import React from "react";

function ContactUs() {
  return (
    <section className="contact-section d-flex align-items-center justify-content-center" id="contactUs">
      <div className="contact-container p-5 text-white">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center mb-5">
          Have questions or want to book your dream car? Get in touch with us!
        </p>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="you@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-light w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <h5>📍 Address</h5>
              <p>123 Car Street, Auto City, USA</p>
            </div>
            <div className="info-box mb-4">
              <h5>📞 Phone</h5>
              <p>+1 234 567 890</p>
            </div>
            <div className="info-box">
              <h5>📧 Email</h5>
              <p>support@carbreezy.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

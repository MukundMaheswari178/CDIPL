/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling.


const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  // To trigger the popup automatically on page load
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000); // Show popup after 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Function to handle popup toggle
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted");
    togglePopup(); // Close the popup after submission
  };

  return (
    <>
      {/* Sticky Inquiry Button */}
      <div className="inquiry-icon" onClick={togglePopup}>
        <i className="fas fa-question-circle"></i> 
      </div>

      {/* Inquiry Form Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box" >
            <h2>Instant Inquiry</h2>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="Enter your phone number" required />
              </div>
              <div className="form-group">
                <label>Inquiry Purpose</label>
                <textarea className="form-control" placeholder="Describe your inquiry" required></textarea>
              </div>
              <div className="button-group">
                <button type="submit" className="btn btn-danger">Submit</button>
                <button type="button" className="btn btn-secondary" onClick={togglePopup}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Contact Info</h4>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2"></i> B-84, Sector 2, Noida 201301, GautamBuddh Nagar    
                </a>
                <a href="#">
                  <i className="fas fa-envelope me-2"></i> info@contourdirectindia.com
                </a>
                <a href="#">
                  <i className="fas fa-phone me-2"></i> +91-8087616057
                </a>
                <a href="#" className="mb-3">
                  <i className="fas fa-print me-2"></i> +91-8087616057
                </a>

                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-secondary me-2"></i>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn mx-1" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Opening Time</h4>
                <div className="mb-3">
                  <h6 className="text-white mb-0">Mon - Sunday:</h6>
                  <p className="text-white mb-0">09.30 am to 06.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-white mb-0">Saturday:</h6>
                  <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-white mb-0">Vacation:</h6>
                  <p className="text-white mb-0">All Tuesday is our vacation</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Our Services</h4>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Property
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Evaluation
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Migrate
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Study
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Counselling
                </a>
                <a href="#">
                  <i className="fas fa-angle-right me-2"></i> Work / Career
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-secondary mb-4">Newsletter</h4>
                <p className="text-white mb-3">
                  Welcome to <strong>Contour Direct India Private Limited</strong>, a sister concern firm of <strong>CBPL</strong>.
                  Founded in 2024, CDIPL is a Real estate Consulting firm with huge aspirations
                  and the entire Real estate world to capture in its arms. CDIPL is aligned to
                  cater Residential, Commercial, and Mixed Use real estate needs of the DELHI NCR
                  region.
                </p>
                <div className="position-relative mx-auto rounded-pill">
                  <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <a href="www.cdipl.com" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>CDIPL
                </a>
                , All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By{" "}
              <a className="border-bottom text-white" href="https://htmlcodex.com">
                DSMARKIT
              </a>{" "}
              Distributed By{" "}
              <a className="border-bottom text-white" href="https://themewagon.com">
                CDIPL
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-danger btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;

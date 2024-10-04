import React from "react";
import "./About.css"; // Assuming you have a CSS file for custom styling.

function AboutSection() {
  return (
    <div className="container-fluid py-5 about-section">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left Image Section */}
          <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
            <div className="bg-light rounded shadow-sm overflow-hidden">
              <img
                src="./orizzontefront.jpeg"
                className="img-fluid w-100"
                alt="Property"
              />
              <img
                src="./9cf68128810d357b9b12d61c921a49b4.webp"
                className="img-fluid w-100 border-bottom border-5 border-primary rounded-top"
                alt="Property"
              />
            </div>
          </div>
          {/* Right Content Section */}
          <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
            <h5 className="sub-title pe-3">About Our Company</h5>
            <h1 className="display-5 mb-4 fw-bold">
              Why Choose Our Real Estate Services?
            </h1>
            <p className="mb-4 text-muted">
            Welcome to <strong>Contour Direct India Private Limited </strong> a sister concern firm of<strong> CBPL</strong>.
              Founded in 2019, CDIPL is a Real estate Developer And Consulting firm with huge aspirations
              and the entire Real estate world to capture in its arms. CDIPL is aligned to
              cater Residential, Commercial and Mixed Use real estate needs of DELHI NCR
              region. The core idea behind CDIPL is that the journey of a Real Estate buyer is
              no different than marriage between two individuals.

            </p>
            At CDIPL, we believe that finding a home is more than just a transaction- it's a
              personal journey. Founded on the principles of trust, integrity, and dedication,
              we’re here to make your real estate experience as smooth and enjoyable as
              you would imagine.
            {/* Service Highlights */}
            <div className="row gy-4">
              <div className="col-12 col-sm-6 icon-text">
                <i className="fas fa-map-marked-alt text-danger"></i>
                <h5 className="ms-4">Extensive Property Listings</h5>
              </div>
              <div className="col-12 col-sm-6 icon-text">
                <i className="fas fa-key text-danger"></i>
                <h5 className="ms-4">Exclusive Properties Available</h5>
              </div>
            </div>
            {/* Experience & Services */}
            <div className="row mt-4">
              <div className="col-4 col-md-3">
                <div className="years-experience">
                  <div className="mb-2">
                    <i className="fas fa-building fa-4x text-danger"></i>
                  </div>
                  <h1 className="display-5 fw-bold mb-0">34</h1>
                  <p className="text-muted">Years of Experience</p>
                </div>
              </div>
              <div className="col-8 col-md-9">
                <div className="mb-4">
                  <p className="h6 text-danger">
                    <i className="fas fa-shield-alt text-secondary me-2"></i>
                    Trusted by Thousands of Clients
                  </p>
                  <p className="h6 text-danger">
                    <i className="fas fa-chart-line text-secondary me-2"></i>
                    Comprehensive Market Insights
                  </p>
                  <p className="h6 text-danger">
                    <i className="fas fa-user-check text-secondary me-2"></i>
                    Personalized Service for Every Client
                  </p>
                </div>
                {/* Contact Information */}
                <div className="d-flex align-items-center">
                  <a
                    href="tel:+01234567890"
                    className="btn btn-outline-danger me-4 wow tada"
                    data-wow-delay=".9s"
                  >
                    <i className="fa fa-phone-alt fa-2x"></i>
                  </a>
                  <div className="phone-info">
                    <span className="text-danger">Have any questions?</span>
                    <span className="text-secondary fw-bold fs-5">
                      <br/>
                      Call Us: +91-8087616057
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

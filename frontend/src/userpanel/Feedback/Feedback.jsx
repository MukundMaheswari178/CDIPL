import React from 'react';
import './Feedback.css'; // CSS file for custom styling
import { FaUser, FaEnvelope, FaPhone, FaPen } from 'react-icons/fa';

const InquiryForm = () => {
  return (
    <div className="inquiry-section">
      {/* Right Side: Inquiry Form */}
      <div className="inquiry-form-container">
        <h3 className="mb-3 text-center">Instant Inquiry</h3>

        {/* Inquiry Form */}
        <form>
          {/* Name Field */}
          <div className="mb-3 input-icon">
            <FaUser className="form-icon" />
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3 input-icon">
            <FaEnvelope className="form-icon" />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-3 input-icon">
            <FaPhone className="form-icon" />
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Requirement Field */}
          <div className="mb-3 input-icon">
            <FaPen className="form-icon" />
            <textarea
              className="form-control"
              placeholder="Enter Your Requirement"
              rows="3"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;

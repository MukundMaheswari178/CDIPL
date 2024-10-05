import React, { useEffect, useRef, useState } from "react";
import './Company.css';

const Companies = () => {
  const containerRef = useRef(null);

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

  useEffect(() => {
    const container = containerRef.current;

    const moveNext = () => {
      const firstItem = container.querySelector('.company-box');
      container.appendChild(firstItem); // Move the first item to the end
    };

    // Auto-slide every 3 seconds
    const autoSlide = setInterval(moveNext, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlide);
  }, []);




  const companies = [
    {
      name: "Investment",
      description: "Maximize your returns with strategic investments in various sectors."
    },
    {
      name: "Rental Income",
      description: "Generate passive income through short-term and long-term rental properties."
    },
    {
      name: "Luxury Properties",
      description: "Explore exquisite luxury homes and villas for discerning buyers."
    },
    {
      name: "Office Space",
      description: "Invest in prime office spaces catering to the IT/ITES sector for high yields."
    },
    {
      name: "Owning a Land Parcel",
      description: "Invest in land parcels for future development or personal use."
    },
    {
      name: "Freehold",
      description: "Own property without any time limits, providing you with total control."
    },
    {
      name: "Leasehold",
      description: "Invest in leasehold properties offering security and investment potential."
    }
  ];

  return (
    <>

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

    <section className="c-wrapper">
      <h2 className="c-heading">What's your approach?</h2>
      <p className="c-description">Our approach involves partnering with leading companies globally to deliver top-tier investment opportunities and property services.</p>
      <div ref={containerRef} className="paddings innerWidth flexCenter c-container9">
        {companies.map((company, index) => (
          <div key={index} className="company-box">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Companies;

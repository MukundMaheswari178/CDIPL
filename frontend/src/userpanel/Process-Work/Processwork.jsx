import React from 'react';
import './ProcessSection.css';
import trusted from '../../assets/try.jpg';
import saleunse from '../../assets/for-sale-unscreen.gif';
import leadership from '../../assets/leadership-unscreen.gif';
import value from '../../assets/value-unscreen.gif';

const ProcessSection = () => {
  return (
    <div className="process-container" style={{ backgroundImage: `url(${trusted})`}}>
          <h2 style={{textAlign:'center', color:'white', fontWeight:'700'}}>Why Choose Us</h2>
      <div className="process-body">
        <div className="left-side">
          <div className="process-item animated-item">
            <div className="icon">
              <img src={leadership} alt="Lead Generation Icon" />
            </div>
            <div className="details">
              <h3>Lead Generation</h3>
              <p>Explore our homepage for a quick introduction to our services and opportunities.</p>
            </div>
          </div>

          <div className="process-item animated-item">
            <div className="icon">
              <img src={value} alt="Profile Analysis Icon" />
            </div>
            <div className="details">
              <h3>Profile Analysis</h3>
              <p>We engage with clients through multi-round discussions to understand their goals.</p>
            </div>
          </div>

          <div className="process-item animated-item">
            <div className="icon">
              <img src={saleunse} alt="Service Recommendation Icon" />
            </div>
            <div className="details">
              <h3>Service Recommendation</h3>
              <p>Our tailored solutions ensure that every client gets personalized real estate advice.</p>
            </div>
          </div>
        </div>

        {/* CDIPL Logo in the center */}
        <div className="logo-section">
          <img src='./cdipl.png' alt="CDIPL Logo" className="cdipl-logo" />
        </div>

        <div className="right-side">
          <div className="process-item animated-item">
            <div className="icon">
              <img src={saleunse} alt="Property Insights" />
            </div>
            <div className="details">
              <h3>Property Insights</h3>
              <p>We provide in-depth analysis of properties based on market trends and data.</p>
            </div>
          </div>

          <div className="process-item animated-item">
            <div className="icon">
              <img src={leadership} alt="Client Support" />
            </div>
            <div className="details">
              <h3>Client Support</h3>
              <p>Our dedicated support team ensures a smooth transaction from start to finish.</p>
            </div>
          </div>

          <div className="process-item animated-item">
            <div className="icon">
              <img src={value} alt="After-Sales Service" />
            </div>
            <div className="details">
              <h3>After-Sales Service</h3>
              <p>We offer ongoing support to help clients settle into their new properties comfortably.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

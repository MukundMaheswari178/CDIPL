import React, { useEffect, useRef } from "react";
import './Company.css';

const Companies = () => {
  const containerRef = useRef(null);

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
  );
};

export default Companies;

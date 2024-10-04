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
      name: "Prologis",
      description: "Leading global logistics company providing distribution and warehousing."
    },
    {
      name: "Tower",
      description: "Skyscrapers and high-rise building developers and designers."
    },
    {
      name: "Equinix",
      description: "Data center and internet exchange provider for digital business."
    },
    {
      name: "Realty",
      description: "Real estate company specializing in commercial and residential properties."
    }
  ];

  return (
    <section className="c-wrapper">
      <h2 className="c-heading">What's your approach?</h2>
      <p className="c-description">Our approach involves partnering with leading companies globally to deliver top-tier services and products to our clients.</p>
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

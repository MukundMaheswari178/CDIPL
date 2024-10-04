import React, { useEffect } from "react";
import "./Hero.css"; 
import img1 from "../../assets/p1.jpg"; // Corrected image import
import img2 from "../../assets/m3m-The-cullinan.png"; // Corrected image import
import img3 from "../../assets/banner1.jpg";
import img4 from "../../assets/m3m-the-line.png"; // Corrected image import
import img5 from "../../assets/nimbus the-palm-village.png"; // Corrected image import
import img6 from "../../assets/quad.png";

const HeroSection = () => {
  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slide = document.querySelector('.slide');

    const moveNext = () => {
      const items = document.querySelectorAll('.item2');
      slide.appendChild(items[0]);
    };

    const movePrev = () => {
      const items = document.querySelectorAll('.item2');
      slide.prepend(items[items.length - 1]);
    };

    // Event listeners for manual control
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);

    // Automatic sliding functionality
    const autoSlideInterval = 3000; // Auto slide every 3 seconds
    const autoSlide = setInterval(moveNext, autoSlideInterval);

    // Cleanup function to remove listeners and intervals when the component unmounts
    return () => {
      next.removeEventListener('click', moveNext);
      prev.removeEventListener('click', movePrev);
      clearInterval(autoSlide);
    };
  }, []); // Runs once after the initial render

  const slideData = [
    { name: "Sharda WTC ", img: img1 , dec: 'WTC World Trade Centre ShardaUptown Quad offers a wide range of luxurious recreational activities. These homes are designed with luxury and high standards, providing maximum privacy.'},
    { name: "NOIDA NXT", img: img2 ,dec: 'NOIDA NXT by Sharda Uptown ORIZZONTE in Knowledge Park-3 offers a modern lifestyle with 1 & 2 BHK luxury apartments, serviced apartments, and a 5-star hotel.' },
    { name: "The Spot", img: img3 ,dec: 'Introducing The Buzz at Sharda Uptown ORIZZONTE, a dynamic retail destination buzzing with commercial and entertainment activities. Strategically positioned on the ground and first floors of the residential and hostel spaces' },
    { name: "WEB", img: img4 , dec: 'W.E.B. (WHERE EVERYONE BELONGS) at Sharda Uptown ORIZZONTE in Greater Noida offers premium hostel apartments tailored to meet the needs of professionals and students. ' },
    { name: "The Spot", img: img5 ,dec: 'Welcome to The Spot House at Sharda Uptown ORIZZONTE, an innovative development offering fully furnished hostel studios in Knowledge Park 3, Greater Noida.  ' },
    { name: "Sukhbiri", img: img6 ,dec: '' },
  ];

  return (
    <div className="hero">
      <div className="container3">
        <div className="slide">
          {slideData.map((slideItem, index) => (
            <div
              key={index}
              className="item2"
              style={{
                backgroundImage: `url(${slideItem.img})`,
              }}
              aria-label={slideItem.name}
            >
              <div className="content2">
                <div className="name">{slideItem.name}</div>
                <div className="des">
                {slideItem.dec}
                </div>
                <button>See More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="button3">
          <button className="prev" aria-label="Previous Slide">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" aria-label="Next Slide">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

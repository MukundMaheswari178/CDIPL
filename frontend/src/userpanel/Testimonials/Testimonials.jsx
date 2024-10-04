// src/userpanel/Testimonials/Testimonials.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import './Testimonials.css'; // Import the CSS file

// Sample testimonials data
const testimonials = [
  {
    name: 'John Doe',
    feedback: 'Excellent service! Highly recommended.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Jane Smith',
    feedback: 'A wonderful experience from start to finish.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Mike Johnson',
    feedback: 'Great support and quick response times.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Emily Davis',
    feedback: 'I was very satisfied with the service provided.',
    rating: '⭐⭐⭐⭐⭐',
  },
  {
    name: 'Sarah Connor',
    feedback: 'The team was very professional and helpful.',
    rating: '⭐⭐⭐⭐⭐',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3} // Show 3 slides at once
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]} // Add Autoplay module here
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <p className="feedback">"{testimonial.feedback}"</p>
              <p className="customer-name">- {testimonial.name}</p>
              <p className="customer-rating">{testimonial.rating}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

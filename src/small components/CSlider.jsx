import React, { useState, useEffect } from 'react';
import '../css/CSlider.css';

const CSlider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="cslider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`cslide ${index === currentIndex ? 'active' : ''}`}
        >
          <p className="Ctext">{slide.text}</p>
          <p className="Cname">{slide.name}</p>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CSlider;

import React, { useState, useEffect } from 'react';
import '../css/Slider1.css'; 

const Slider = () => {
  const texts = ['Verify Your Leads?', 'Find an Address from an Email?', 'Append Additional Contact Info?', 'Verify Someone Age?']; 
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="slider-container">
      <h1 className="slider-text">{texts[currentTextIndex]}</h1>
    </div>
  );
};

export default Slider;

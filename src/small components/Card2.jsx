import React from 'react';
import '../css/CSlider.css';

const Card2 = ({ text, name }) => {
  return (
    <div className="card2">
      <p className="card2-text">{text}</p>
      <p className="card2-name">{name}</p>
    </div>
  );
};

export default Card2;
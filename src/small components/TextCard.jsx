import React from 'react';
import '../css/IconWithText.css';
import '../css/TextCard.css';

const TextCard = ({ icon, title, text, backgroundColor }) => {



  const handleIconHover = (event) => {
    event.target.classList.toggle('zoom-in');
  };
  return (
    <div className="Iicon-card">
      <div
        className="Iicon"
        style={{ backgroundColor: backgroundColor }}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconHover}
      >
        {icon}
      </div>
      <h3 className="Ttitle">{title}</h3>
      <p className="Ttext">{text}</p>
    </div>
  );
};

export default TextCard;

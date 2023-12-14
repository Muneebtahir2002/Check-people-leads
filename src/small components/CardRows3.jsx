import React from 'react';
import '../css/CardRow.css';

const CardRow3 = () => {
  const cardsData = [
      { id: 1,   iconColor: '#3498db', heading: 'Business Search', text1: 'Performs a criteria search, and returns a list of matching businesses', text2: 'addresses, business name, name, partial DOB' },
      { id: 2,  iconColor: '#3498db', heading: 'Workplace Records', text1: 'Provides a list of workplace records based on your search criteria', text2: 'Additional Info 2' },
      { id: 3,  iconColor: '#3498db', heading: 'Workplace Search', text1: 'Description 3', text2: 'Additional Info 3' },
  ];

  const cardsPerRow = 3;

  return (
    <div className="card-row-container">
      {cardsData.map((card, index) => (
        <div key={card.id} className="cardrow">
          <div className="iconRow" style={{ backgroundColor: card.iconColor }}>
            <span>Icon</span>
          </div>
          <div className="content">
            <h3>{card.heading}</h3>
            <p>{card.text1}</p>
          </div>
          <div className="light-text">
            <p>{card.text2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRow3;

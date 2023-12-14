import React from 'react';
import '../css/CardRow.css';

const CardRow2 = () => {
  const cardsData = [
      { id: 1,   iconColor: '#3498db', heading: 'ContactID', text1: 'Check for updates on any previous matched contact', text2: 'addresses, age, email, name, phone' },
      { id: 2,  iconColor: '#3498db', heading: 'Identity Verification', text1: 'Description 2', text2: 'Additional Info 2' },
      { id: 3,  iconColor: '#3498db', heading: 'Person Search', text1: 'Description 3', text2: 'Additional Info 3' },
      { id: 4,  iconColor: '#3498db', heading: 'Property Search', text1: 'Description 3', text2: 'Additional Info 3' },
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

export default CardRow2;

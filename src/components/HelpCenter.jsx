// HelpCenter.js
import React, { useState } from 'react';
import '../css/HelpCenter.css';
import APPBAR from '../small components/AppBar2';
import { Link } from 'react-router-dom';
import Footer from '../small components/Footer2';

const categories = ['All', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

const HelpCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterCards = (category) => {
    return selectedCategory === 'All' || selectedCategory === category;
  };

  return (
    <div>
      <APPBAR />
      <div>
      <h2 className='head-head2'>Endato Help Center</h2>
        <p style={{
            textAlign:'center',
            fontSize:'16'
        }}>
       View a variety of faqs, support articles and troubleshooting solutions.
Have a direct question not covered?<Link to='/check-api-contactus'>Contact Support</Link>
        </p>
      </div>
      <div className="card-list-container-container">
        <div className="radio-options">
          {categories.map((category) => (
            <div key={category} className="radio-container">
              <input
                type="radio"
                id={category}
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>

        <div className="card2-container">
          {cardsData
            .filter((card) => filterCards(card.category))
            .map((card) => (
              <Card key={card.id} title={card.title} text={card.text} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Card = ({ title, text }) => {
  return (
    <div className="card-wrapper">
      <p className="card-title-title"><strong>{title}</strong></p>
      <p className="card-text">{text}</p>
    </div>
  );
};

const cardsData = [
  { id: 1, title: 'Card 1', category: 'Category 1', text: 'Text for Card 1' },
  { id: 2, title: 'Card 2', category: 'Category 4', text: 'Text for Card 2' },
  { id: 3, title: 'Card 3', category: 'Category 1', text: 'Text for Card 3' },
];

export default HelpCenter;

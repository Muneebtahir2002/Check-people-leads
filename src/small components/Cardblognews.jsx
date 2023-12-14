import React from 'react';
import { Link } from 'react-router-dom';
import '../css/blognew.css';

const Cardblognews = ({ imageUrl, title, text }) => {
  const firstLine = text ? text.match(/^(.*?)(\.|$)/)[1] : '';

  return (
    <div className="cardnews-wrapper">
      <div className="cardnews">
        <img src={imageUrl} alt={title} />
        <div className="cardnews-content">
          <h3 className='cardnews-text'>
            <Link to={`/blog/${title}`}>{title}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cardblognews;

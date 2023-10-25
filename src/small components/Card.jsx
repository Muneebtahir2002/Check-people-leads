import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, text }) => {
  
    const firstLine = text ? text.match(/^(.*?)(\.|$)/)[1] : '';

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div>
        <h3 className='card-text'>
          <Link to={`/blog/${title}`}>{title}</Link>
        </h3>
        {firstLine && <p>{firstLine}</p>}
      </div>
    </div>
  );
};

export default Card;
import React from 'react';

const Card = ({ imageUrl, title, link, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div>
      <h3 className='card-text'>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default Card;
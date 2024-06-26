import React from 'react';
import Card from './Card';

function CardColumn({ dummydata }) {
  return (
    <div className="card-columns">
      {dummydata.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          link={card.link}
          text={card.text}
        />
      ))}
    </div>
  );
}

export default CardColumn;
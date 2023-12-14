import React from 'react';
import Cardblognews from './Cardblognews';
function CardColumn2({ dummydata }) {
  return (
    <div className="card-rows">
      {dummydata.map((card) => (
        <Cardblognews
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

export default CardColumn2;
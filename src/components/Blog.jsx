import React, { useState } from 'react';
import CardColumn from '../small components/CardColumn';
import { dummydata } from '../data/Carddata';
import '../css/Blog.css'

function MyComponent() {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  return (
    <div>
      <CardColumn dummydata={dummydata.slice(0, visibleItems)} />
      {visibleItems < dummydata.length && (
        <button className="load-more-button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default MyComponent;
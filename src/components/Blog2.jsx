import React, { useState } from 'react';
import { dummydata } from '../data/DummyData';
import '../css/BlogNews.css';
import APPBAR from '../small components/AppBar2';
import Footer from '../small components/Footer2';
import CardColumn2 from '../small components/CardColumn2';

function BLOGNEWS() {
  const [visibleItems, setVisibleItems] = useState(2);

  const loadMore = () => {
    setVisibleItems(visibleItems + 2);
  };

  return (
    <div>
      <APPBAR />

      <div className="card-rows-container">
        <CardColumn2 dummydata={dummydata.slice(0, visibleItems)} />
      </div>

      <div className="load-more-wrapper">
        {visibleItems < dummydata.length && (
          <>
            <span className="page-numbers">Page {Math.ceil(visibleItems / 2)}</span>
            <button className="button-blognews" onClick={loadMore}>Load More</button>
          </>
        )}
      </div>

      <div style={{ padding: 100 }} />
      <Footer />
    </div>
  );
}

export default BLOGNEWS;

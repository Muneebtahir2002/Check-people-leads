import React, { useState } from 'react';
import CardColumn from '../small components/CardColumn';
import { dummydata } from '../data/Carddata';
import '../css/Blog.css'
import Footer from '../small components/footer';
import CustomAppBar from '../small components/appbar';

function MyComponent() {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  return (
    <div className='body-Card'>
      <CustomAppBar/>
      
      <CardColumn dummydata={dummydata.slice(0, visibleItems)} />
      {visibleItems < dummydata.length && (
        <div className="button-container">
        <button className="load-more-button" onClick={loadMore}>Load More</button>
      </div>
      )}
      <Footer/>
    </div>
  );
}

export default MyComponent;
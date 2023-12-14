import React from 'react';
import APPBAR from '../small components/AppBar2';
import '../css/NewApp2.css'
import IMG1 from '../images/api-save.JPG'
import CardRow from '../small components/CardRows';
import IMG2 from '../images/marketing-data-developer-api-tools.jpg'
import Footer from '../small components/Footer2';
const NewApp4 = () => {
  return (
    <div>
        <APPBAR />
     <div>
    <h2 className='head-head2'>Run Power Searches for All Your Data Needs</h2>
    <p className='p-p1'>Access instant and up-to-date data across People, Public Records, Property, Business, Assets, Licenses, Criminal, Court and more
</p>
     </div>
     <div style={{position:'relative',height:300}}>
        <img src={IMG1} alt="API" className='image-imageapi' />
     </div>
     <div>
     <h2 className='head-head2'>Explore our API Products</h2>
     <p className='p-p1'>Enrich your contact, verify users, find property owners, we have the data!</p>
     <CardRow />
     </div>
  <div  style={{padding:100}}/>
  <Footer />
    </div>
  );
};

export default NewApp4;

import React from 'react';
import APPBAR from '../small components/AppBar2';
import '../css/NewApp2.css'
import IMG1 from '../images/api-save.JPG'
import CardRow from '../small components/CardRows';
import IMG2 from '../images/marketing-data-developer-api-tools.jpg'
import Footer from '../small components/Footer2';
const NewApp2 = () => {
  return (
    <div>
        <APPBAR />
     <div>
    <h2 className='head-head2'>Fresh, Reliable, Real-Time Data</h2>
    <p className='p-p1'>From Startups to Fortune 500's, power your application and enrich your people data with our robust APIs from over 300 million people profiles</p>
     </div>
     <div style={{position:'relative',height:300}}>
        <img src={IMG1} alt="API" className='image-imageapi' />
     </div>
     <div>
     <h2 className='head-head2'>Explore our API Products</h2>
     <p className='p-p1'>Enrich your contact, verify users, find property owners, we have the data!</p>
     <CardRow />
     </div>
     <div style={{padding:30}} />
     <div>
     <h2 className='head-head2'>Developer Use Cases</h2>
     <p className='p-p1'>Just some examples of ways Developers have used Endato to better target their audiences and more</p>
     </div>
     <div className='image-wrapper'>
     <div>
    <img src={IMG2} alt="Marketing" />
  </div>
  <div className='text-text-container'>
    <h1>Check people leads Smart Matching</h1>
    <p>Tired of multiple and inaccurate results?</p>
    <p>Unlike our competitors who do traditional and simple direct searches and matching, Endato API Searches 1000’s of sub-calls, taking variations, misspellings, and partial versions finding as many matches as possible, scoring each one, and then only returning the highest result if considered a strong match.</p>
  </div>
  </div>
  <div  style={{padding:100}}/>
  <Footer />
    </div>
  );
};

export default NewApp2;

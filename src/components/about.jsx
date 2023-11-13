import React from 'react';
import CustomAppBar from '../small components/appbar';
import Footer from '../small components/footer';

const Home = () => {
  return (
    <div>
      <CustomAppBar/>
    <div className='body'>
      <h1>Home Page</h1>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
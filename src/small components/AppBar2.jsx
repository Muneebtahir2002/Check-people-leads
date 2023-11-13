import React from 'react';
import CustomAppBar from './appbar'; 
import Footer from './footer'; 
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import IMG from '../images/check_people_leads_logo.png'
import '../css/AppBar2.css'
function APPBAR({}) {
  return (
    <div>
      <AppBar position="static" className="AppBar" elevation={0} color='transparent'>
      <Toolbar>
        <div className='ima'>
        <img src = {IMG} alt="LOGO" className='logo' />
        <div className='p3'>
        <Link to = '/' >
          <h3>Check People Lead</h3>
        </Link>
        </div>
        </div>
        <div className='l1' >
      <Link to="/about">About</Link>
        <Link to="/services">Products</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to='/blog' className="blog">Blog</Link>
        </div>
        <div className='l2'>
        <Link to='/faq'className='log-in' >FAQ</Link>
        <Link to='/check-api' className="contact">Check Api</Link>
        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default APPBAR;
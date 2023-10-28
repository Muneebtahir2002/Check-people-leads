import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation } from 'react-router-dom';
import '../css/CustomAppBar.css';

function CustomAppBar() {
  const location = useLocation();

  const isBlogPage = location.pathname === '/blog';

  return (
    <AppBar position="static" className="AppBar" elevation={0} color='transparent'>
      <Toolbar>
        {!isBlogPage && ( 
          <>
            <Link to="/about" className="Link">
              About
            </Link>
          </>
        )}
        <Link to="/blog" className="Link">
          Blog
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Link to = '/' >
          <h3 className="CenteredText">Check People Lead</h3>
        </Link>
        <div style={{ flexGrow: 1 }} />
        {!isBlogPage && ( 
          <>
            <Link to="/contact_us" className="Link">
              Contact Us
            </Link>
            <Link to="/faq" className="Link">
              FAQ
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
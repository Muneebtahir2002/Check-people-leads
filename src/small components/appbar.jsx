import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import '../css/CustomAppBar.css';


function CustomAppBar() {
  return (
    <AppBar position="static" className="AppBar" elevation={0} color='transparent'>
      <Toolbar>
      <Link to="/Contact-Us" className="Link">
        About
        </Link>
        <Link to="/FAQ" className="Link">
          Blog
        </Link>
        <div style={{ flexGrow: 1 }} />
        <h3 className="CenteredText">Check People Lead</h3>
        <div style={{ flexGrow: 1 }} />
        <Link to="/Contact-Us" className="Link">
        Contact Us
        </Link>
        <Link to="/FAQ" className="Link">
          FAQ
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
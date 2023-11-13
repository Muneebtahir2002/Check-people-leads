import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import '../css/CustomAppBar.css';

function CustomAppBar() {
  return (
    <AppBar position="static" className="AppBar" elevation={0} color='transparent'>
      <Toolbar>
        <Link to = '/' >
          <h3 className="CenteredText">Check People Lead</h3>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
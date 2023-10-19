import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function CustomAppBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} >
      <Toolbar>
      <div style={{ flexGrow: 1 }} /> 
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewApp from './components/NewApp';
import './newApp.css'; 

function NewAppRoute() {
  return (
    <Routes>
      <Route path="/" element={<NewApp />} />
      
    </Routes>
  );
}

export default NewAppRoute;
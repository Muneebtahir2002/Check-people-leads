import React from 'react';
import CustomAppBar from "./small components/appbar"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/landingpage';
import About from './components/about';
import Contact from './components/contactUs';
import Blog from './components/Blog'

const ROUTE = () => {
  return (
    <BrowserRouter>
    <CustomAppBar/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/Contact-Us' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default ROUTE;
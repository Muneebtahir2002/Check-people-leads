import React from 'react';
import CustomAppBar from "./small components/appbar";
import { Route, Routes } from 'react-router-dom';
import Home from './components/landingpage';
import About from './components/about';
import Contact from './components/contactUs';
import Blog from './components/Blog';
import BlogCard from './components/BlogCard';

const ROUTE = () => {
  return (
    <div>
      <CustomAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:name" element={<BlogCard />} />
        <Route path='/Contact-Us' element={<Contact />} />
      </Routes>
    </div>
  );
};

export default ROUTE;
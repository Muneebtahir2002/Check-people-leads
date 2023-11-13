import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/landingpage';
import About from './components/about';
import Contact from './components/contactUs';
import NewApp from './components/NewApp'; 
import Blog from './components/Blog';
import BlogCard from './components/BlogCard';

function ROUTE() {
  return (
      <div>
        <Routes>
        <Route path="/check-api" element={<NewApp />} />
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:name" element={<BlogCard />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>

      </div>
  );
}

export default ROUTE;

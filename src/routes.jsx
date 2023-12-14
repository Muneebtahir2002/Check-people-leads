import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/landingpage';
import About from './components/about';
import Contact from './components/contactUs';
import NewApp from './components/NewApp'; 
import Blog from './components/Blog';
import BlogCard from './components/BlogCard';
import NewApp2 from './components/NewApp2';
import NewApp3 from './components/NewApp3';
import NewApp4 from './components/NewApp4';
import PeopleSearch from './components/PeopleSearch';
import WorkData from './components/WorkData';
import PropertyData from './components/PropertyData';
import AssetsData from './components/AssetsData';
import LicenseData from './components/LicenseData';
import Marketing from './components/Marketing';
import Sales from './components/Sales';
import Developers from './components/Developers';
import Realtors from './components/Realtors';
import BLOGNEWS from './components/Blog2';
import Workplace from './components/Workplace';
import HelpCenter from './components/HelpCenter';

function ROUTE() {
  return (
      <div>
        <Routes>
        <Route path="/check-api" element={<NewApp />} />
        <Route path="/check-api/checkpeopleleadapi" element={<NewApp2 />} />
        <Route path="/check-api/checkpeopleleadsbatch" element={<NewApp3 />} />
        <Route path="/check-api/checkpeopleleadssearch" element={<NewApp4 />} />
        <Route path="/check-api/people-data" element={<PeopleSearch />} />
        <Route path="/check-api/work-data" element={<WorkData />} />
        <Route path="/check-api/property-data" element={<PropertyData />} />
        <Route path="/check-api/assets-data" element={<AssetsData />} />
        <Route path="/check-api/license-data" element={<LicenseData />} />
        <Route path="/check-api/marketing-data" element={<Marketing />} />
        <Route path="/check-api/sales-data" element={<Sales />} />
        <Route path="/check-api/developers-data" element={<Developers />} />
        <Route path="/check-api/realtors-data" element={<Realtors />} />
        <Route path="/check-api/blognews" element={<BLOGNEWS />} />
        <Route path="/check-api/workplace" element={<Workplace />} />
        <Route path="/check-api/helpcenter" element={<HelpCenter />} />
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

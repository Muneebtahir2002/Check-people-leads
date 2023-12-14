import React from 'react';
import APPBAR from '../small components/AppBar2';
import '../css/PeopleSearch.css';
import IMG from '../images/people-data-report-example (1).png';
import Footer from '../small components/Footer2';
import { Link } from 'react-router-dom';
import CardRow3 from '../small components/CardRows3';
import { FaHeart } from 'react-icons/fa';
import TextCard from '../small components/TextCard';

const Developers = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <APPBAR />
      <div>
        <h2 className='head-head2'>Business Data & Workplace Search API</h2>
        <p className='p-p1'>
        The Endato Data Suite is designed to optimize your data gathering services by delivering accurate and reliable work data search reports. Search and API products can help you collect work data more efficiently and with greater success.
        </p>
        <div className='LINKS-centered'>
          <Link to='/'>Home</Link>
          <span style={{ margin: '0 10px' }}>&gt;</span>
          <Link to='/b2b-data'>Our B2B Data</Link>
          <span style={{ margin: '0 10px' }}>&gt;</span>
          <Link to='/datasets'>Data Sets</Link>
          <span style={{ margin: '0 10px' }}>&gt;</span>
          <Link to='/work-data'>Work Data</Link>
        </div>
        <div className='grey'>
        <div className="container-container-card10">
  <div>
    <img src={IMG} alt="blackhole" />
  </div>
  <div className='text-text-container'>
    <h1>Find Workplace Data</h1>
    <p>The Endato Data Suite is designed to optimize your data gathering services by delivering accurate and reliable work data search reports. Search and API products can help you collect work data more efficiently and with greater success.</p>
    <button className='button-button-s'>Start Your Free Trial</button>
  </div>
  </div>
        </div>
        <div>
        <div>
        <h2 className='head-head2'>Marketing Use Cases</h2>
        <p className='p-p1'>
        Here are some examples of ways Marketers have used Endato to better target their audiences and more
        </p>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextCard
        icon={<FaHeart />} 
        title="Smart Matching"
        text="The only API that will run 1000's of sub searches, scoring each match, and returning a high-quality single result match"
        backgroundColor="#61dafb" 
      />
    <TextCard
        icon={<FaHeart />} 
        title="Deep Data"
        text="120+ Billion Records
        6,000 Data Sources
        3M records Added Monthly
        Data Refreshed Daily."
        backgroundColor="#61dafb" 
      />
    <TextCard
        icon={<FaHeart />} 
        title="Instant Results"
        text="Response Time Under 300ms
        SLA Uptime Guarantee 99.9%
        World Class Tier 1 Data Center
        Built by Devs for Devs"
        backgroundColor="#61dafb" 
      />
      </div>
        </div>
        </div>
        <div>
        <h2 className='head-head2'>Related Data Fields</h2>
        <p className='p-p1'>
        Our People Data Reports Include:
        </p>
        </div>
        <p className='p-p2'>
          <Link  onClick={scrollToTop}>addresses</Link>, 
          <Link  onClick={scrollToTop}> age</Link>, 
          <Link  onClick={scrollToTop}> contacts</Link>, 
          <Link  onClick={scrollToTop}> email</Link>, 
          <Link  onClick={scrollToTop}> gender</Link>, 
          <Link  onClick={scrollToTop}> identity score</Link>, 
          <Link  onClick={scrollToTop}> license records</Link>, 
          <Link  onClick={scrollToTop}> name</Link>, 
          <Link  onClick={scrollToTop}> partial DOB</Link>, 
          <Link  onClick={scrollToTop}> phone</Link>, 
          <Link  onClick={scrollToTop}> workplace</Link>
        </p>
        <div style={{ padding: 100 }} />
        <Footer />
      </div>
    </div>
  );
};

export default Developers;

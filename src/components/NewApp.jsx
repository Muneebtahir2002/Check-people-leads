import React, { useState } from 'react';
import '../newApp.css';
import { Link, Route, Routes } from 'react-router-dom';
import APPBAR from '../small components/AppBar2';
import IMG from '../images/check_people_leads_logo.png'
import IMG2 from '../images/ladder.jpg'
import Table from '../small components/Table';
import Slider from '../small components/Slider1';
import CSlider from '../small components/CSlider';
import CardComponent from '../small components/CardComponent';
import IconCard from '../small components/CardComponent';
import { FaHeart } from 'react-icons/fa';
import IconWithText from '../small components/CardComponent';
import TextCard from '../small components/TextCard';
import Slider2 from '../small components/Slider2';
function NewApp() {
    const [email, setemail] = useState('');
    const handleSubmit = () => {
        alert(`Submitted: ${email}`);
      }
      const slides = [
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          name: 'John Doe',
        },
        {
          text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          name: 'Jane Doe',
        },
        {
          text: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
          name: 'Alice Johnson',
        },
        {
          text: 'Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.',
          name: 'Bob Smith',
        },
        {
          text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
          name: 'Emily Brown',
        },
      ];
  return (
    <div>
        <APPBAR/>
    <div>
        <div style={{padding:10}}/>
        <div className='t-c-holder'>
        <div className='Text-fields'> 
        <p className='p1'>Thank you for your interest in CheckspeopleLeads.com</p>
        <p className='p2'>The data we use is provided by our partner Endato. The ChecksPeapleLeads platform provides access to deeper and wider data sets, with faster results through tools such as API, Search, and Batch Append.</p>
        <h1>Are You Looking to..</h1>
        <Slider />
        <p className='p3'>Less Than a Minute Sign Up, No Credit Card Required.</p>
        <button className='b1'>
            Start your free trial
        </button>
        <button className='b2'>
            Talk to sales
        </button>
        </div>
        <div className='ct'>
        <img src ={IMG} className='logo2' />
        <p className='p4'>Free Trial</p>
        <p className='p5'>No Credit Card, Hidden Fees or Contract</p>
        <p className='p6'>Create an account in less than a minute 
            and start receiving real data from live API calls</p>
        <input
        type="text"
        id="email"
        name="email"
        className='input-em'
        placeholder='Email'
        onChange={(e) => setemail(e.target.value)}
        />
        <button className='b3'
        onClick={handleSubmit}>
            Start Your Free Trial
        </button>
        <p className='p7'>Already have an account?<Link> Sign in now </Link></p>
        </div>
        </div>
        <div style={{padding:10}}/>
        <div className='container-container'>
            <p className='p8'>Join the over 6000 companies using our data to power their business</p>
            <div className='brands'>
            <img src = {IMG} alt="LOGO"/>
            <img src = {IMG} alt="LOGO"/>
            <img src = {IMG} alt="LOGO"/>
            <img src = {IMG} alt="LOGO"/>
            </div>
            <h1 className='head1'>
            The Check people lead Difference
            </h1>
            <p className='p9'>We strive to be the leader in Contact Enrichment by providing better matches, with better data, with the best pricing</p>
            <Table />
            <p className='p10'>Ready to try for yourself? Get 100 Free Searches Now. Less Than a Minute Sign Up, No Credit Card Required.</p>
            <button className='button-s'>Start Your Free Trial</button>
        </div>
        <div>
            <h1 className='head-head-2'>Check People Leads</h1>
            <CSlider slides={slides} />
        </div>
        <div>
            <h1 className='head1'>
            Fresh, Reliable, Real-Time Data
            </h1>
            <p className='p11'>Explore below our wide range and depth of data</p>
            <div className='depth'>
      <div>
        <IconWithText iconColor="#61dafb"
         text="300+ Million Unique People. Primary and Alias Names, Phone Number, Email, Address History, Relatives, Associates, Neighbors" 
         boldText="300+ Million Unique People"/>
        <div style={{padding:20}}/>
        <IconWithText iconColor="#61dafb" 
        text="210 Million Business Records. Employees (Current and Historical), Corporate Registrations, known Fictitious Business Names, FEIN Records, UCC Filings"
        boldText="210 Million Business Records" />
        <div style={{padding:20}}/>
        <IconWithText iconColor="#61dafb" 
        text="163 Million Properties. Business & Residential Addresses, Property Records & Info, Assessor Records, Current Owner and Residents, Property Value" 
        boldText="163 Million Properties"/>
        <div style={{padding:20}}/>
      </div>
      <img src={IMG2} alt="ladder" />
       <div>
        <IconWithText iconColor="#61dafb" text="990 Million Court Records.OFAC, Warrants, Arrests, Judgments, Evictions, Liens, Foreclosures, Bankruptcies, Traffic Violations, Sex Offenders"
        boldText='990 Million Court Records' />
        <div style={{padding:20}}/>
        <IconWithText iconColor="#61dafb" text="83 Million Licenses.Professional, DEA, FAA, Hunting & Fishing, including name, address, state, issue & exp date, business demographics" />
        <div style={{padding:20}}/>
        <IconWithText iconColor="#61dafb" text="100 Million Asset Records.Vehicle / Auto Registrations, Aircraft & Watercraft Ownership, Website Domain Ownership, Property Assets" />
        <div style={{padding:20}}/>
      </div>
    </div>
    </div>
    <div className='card-wrappers'>
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
    <TextCard
        icon={<FaHeart />} 
        title="No Risk"
        text="Free 100 Monthly Matches
        Sign-Up In Minutes
        No Setup or Monthly Fees
        No Contract or Minimums"
        backgroundColor="#61dafb" 
      />
    </div>
    <div>
    <Slider2 />
    </div>
    </div>
    </div>
  );
}

export default NewApp;
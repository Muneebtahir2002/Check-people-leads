import React, { useState } from 'react';
import '../newApp.css';
import { Link, Route, Routes } from 'react-router-dom';
import APPBAR from '../small components/AppBar2';
import IMG from '../images/check_people_leads_logo.png'
import IMG2 from '../images/ladder.jpg'
import Table from '../small components/Table';
import Slider from '../small components/Slider1';
import CSlider from '../small components/CSlider';
import { FaHeart } from 'react-icons/fa';
import IconWithText from '../small components/CardComponent';
import TextCard from '../small components/TextCard';
import Slider2 from '../small components/Slider2';
import IMG3 from '../images/blackhole.jpg'
import IMG4 from '../images/people-data-report-example.png'
import IMG5 from '../images/image1.jpg';
import IMG6 from '../images/image2.jpg';
import IMG7 from '../images/image3.jpg';
import IMG8 from '../images/marketing-solutions-lead-building.jpg'
import IMG9 from '../images/icons8-bar-chart.svg'
import IMG10 from '../images/icons8-buy-for-change.svg'
import IMG11 from '../images/icons8-smartphones.svg'
import IMG12 from '../images/icons8-user-groups.svg'
import ImageSlider from '../small components/ImageIntervals';
import CardWithButtons from '../small components/Cardwithbuttons';
import SwitchButton from '../small components/SwitchButton';
import CardRow from '../small components/CardRows';
import Footer from '../small components/Footer2';
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
      const imageUrls = [IMG5, IMG6, IMG7];
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
        <IconWithText iconColor="#4B1B35"
         text="300+ Million Unique People. Primary and Alias Names, Phone Number, Email, Address History, Relatives, Associates, Neighbors" 
         boldText="300+ Million Unique People"/>
        <div style={{padding:20}}/>
        <IconWithText iconColor="#6E3055" 
        text="210 Million Business Records. Employees (Current and Historical), Corporate Registrations, known Fictitious Business Names, FEIN Records, UCC Filings"
        boldText="210 Million Business Records" />
        <div style={{padding:20}}/>
        <IconWithText iconColor="#9C3A69" 
        text="163 Million Properties. Business & Residential Addresses, Property Records & Info, Assessor Records, Current Owner and Residents, Property Value" 
        boldText="163 Million Properties"/>
        <div style={{padding:20}}/>
      </div>
      <img src={IMG2} alt="ladder" />
       <div>
        <IconWithText iconColor="#DE3E5A" text="990 Million Court Records.OFAC, Warrants, Arrests, Judgments, Evictions, Liens, Foreclosures, Bankruptcies, Traffic Violations, Sex Offenders"
        boldText='990 Million Court Records' />
        <div style={{padding:20}}/>
        <IconWithText iconColor="#FE7040" text="83 Million Licenses.Professional, DEA, FAA, Hunting & Fishing, including name, address, state, issue & exp date, business demographics" />
        <div style={{padding:20}}/>
        <IconWithText iconColor="#FFA015" text="100 Million Asset Records.Vehicle / Auto Registrations, Aircraft & Watercraft Ownership, Website Domain Ownership, Property Assets" />
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
    <button className='button-s'>Start Your Free Trial</button>
    </div>
    <div style={{padding:100}}/>
    <div className="container-container-card10">
  <div>
    <img src={IMG3} alt="blackhole" />
  </div>
  <div className='text-text-container'>
    <h1>Check people leads Smart Matching</h1>
    <p>Tired of multiple and inaccurate results?</p>
    <p>Unlike our competitors who do traditional and simple direct searches and matching, Endato API Searches 1000’s of sub-calls, taking variations, misspellings, and partial versions finding as many matches as possible, scoring each one, and then only returning the highest result if considered a strong match.</p>
  </div>
</div>
<div style={{padding:40}}/>
    <div className="container-container-card11">
    <div className='text-text-container'>
    <h1>Power Your Products Like Never Before​</h1>
    <p>Create amazing data-driven solutions from our Data APIs</p>
    <li>
    Enrich and bulk append your contact information
    </li>
    <li>
    Validate, de-dupe, and merge your current data
    </li>
    <li>
    Highlight reported date and current status
    </li>
  </div>
  <div>
    <img src={IMG4} alt="blackhole" />
  </div>  
</div>
<div className="container-container-card12">
  <ImageSlider images={imageUrls} interval={5000} />
  <div className="center-center-text">
    <div className="text-content">
      <h1 className="head4">Check people leads Smart Matching</h1>
      <p className="p12">Tired of multiple and inaccurate results?</p>
      <p className="p12">Unlike our competitors who do traditional and simple direct searches and matching, Endato API Searches 1000’s of sub-calls, taking variations, misspellings, and partial versions finding as many matches as possible, scoring each one, and then only returning the highest result if considered a strong match.</p>
    </div>
  </div>
</div>
<div style={{padding:60}}/>
    <div>
        <p className='p10'>Ready to try for yourself? Get 100 Free Searches Now.Less Than a Minute Sign Up, No Credit Card Required.</p>
        <div style={{padding:20}}/>
        <button className='button-s'>Start Your Free Trial</button>
    </div>
    <div style={{padding:100}}/>
    <div>
        <h1 className='head5'>Power Your Sales Intelligence</h1>
        <CardWithButtons />
    </div>
    <div>
        <h1 className='head5'>Example Requests and Responses</h1>
        <div style={{padding:20}}/>
        <h3 style={{textAlign:'center',fontSize:22,}}>Contact Enrichment Example</h3>
        <p style={{ textAlign: 'center', fontSize: 18, maxWidth: '600px',marginLeft:650 }}>
  Pass 2 or more of the below fields and get a detailed report on our best match: Full Name, Phone, Email, Full / Partial Address
</p>
    </div>
    <div>
        <SwitchButton />
    </div>
    <div>
    <h1 className='head5'>Explore our API Products</h1>
    <p className='p10'>Enrich your contacts, verify users, find property owners, we have the data!</p>
      <CardRow />
    </div>
    <div style={{padding:50}} />
    <div className="container-container-card10">
  <div>
    <img src={IMG8} alt="blackhole" />
  </div>
  <div className='text-text-container'>
    <h1>About Us</h1>
    <p>Endato founders are industry pioneers and experts in the data technology industry. Designed by the creators of a leading Data-as-a-Service (DaaS) business-to-consumer public records provider, Endato provides data and intelligence to government and commercial organizations, with more than 6,000 data sources and 120 billion records.</p>
    <p>Built on next-generation technology and data solutions, Endato leverages 20 years of experience to provide powerful search technology and deliver billions of records via the investigative cloud-based platform, API, and batch processing.</p>
  </div>
</div>
<div style={{padding:50}} />
<div>
<h1 className='head5'>No Minimums, Contracts, or Hidden Fees</h1>
<p className='p10'>Get started today with a Free Account or schedule a call with our sales consultant.</p>
<button className='button-s'>Start Your Free Trial</button>
</div>
<div className="centered-divs-container">
      <div className="centered-div">
        <img src={IMG9} alt="Image 1" />
        <h1>Leading United States Data</h1>
        <p>More than 95% coverage of Adults in the United States</p>
      </div>
      <div className="centered-div">
        <img src={IMG10} alt="Image 2" />
        <h1 >300+ Million US People Profiles</h1>
        <p>120+ Billion Records from Over 6,000 Data Sources. 3M records added monthly</p>
      </div>

      <div className="centered-div">
        <img src={IMG11} alt="Image 3" />
        <h1 >#1 in Mobile Phone Data</h1>
        <p>Leading accuracy with last reported date, is connected status and more</p>
      </div>
      <div className="centered-div">
        <img src={IMG12} alt="Image 4" />
        <h1 >Affordable Premium Data</h1>
        <p>Competitive pricing with no minimums, contracts or hidden fees</p>
      </div>
    </div>
    <div style={{padding:100}} />
    <Footer />
    </div>
    </div>
  );
}

export default NewApp;
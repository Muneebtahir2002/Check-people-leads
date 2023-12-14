import React from 'react';
import APPBAR from '../small components/AppBar2';
import IMG from '../images/blackhole.jpg';
import '../css/NewApp3.css';
import Footer from '../small components/Footer2';
const NewApp3 =()=>{
    return(
        <div>
            <div>
            <APPBAR />
            </div>
            <div style={{padding:50}} />
            <div>
                <h3 style={{textAlign:'center',fontSize:40}}>
                Instant Self-Serve Batch Appends
                </h3>
                <p style={{textAlign:'center',fontSize:18,width:600,marginLeft:650}}>
                Want to do a bulk append? We make it easy. Simply upload your list, select your requested data, preview the cost, pay, and get your file. That's it!
                </p>
                <img src={IMG} alt="blackhole" className='image-image-center' />
                <div>
                <p style={{textAlign:'center',fontSize:18,width:600,marginLeft:650}}>
                Get started today and update your lead list with fresh contact info!
                </p>
                <button className='button-s'>Upload Now</button>
                </div>
                <div>
                <h3 style={{textAlign:'center',fontSize:40}}>
                3 Easy Steps
                </h3>
                <p style={{textAlign:'center',fontSize:18,width:600,marginLeft:650}}>
                In just 3 simple steps, Endato Batch can receive, parse, append and export!
                </p>
                <div className="container-container-card10">
  <div>
    <img src={IMG} alt="blackhole" />
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
    <p></p>
  </div>
  <div>
    <img src={IMG} alt="blackhole" />
  </div>  
</div>
<div className="container-container-card12">
<img src={IMG} alt="" />
  <div className="center-center-text">
    <div className="text-content">
      <h1 className="head4">Check people leads Smart Matching</h1>
      <p className="p12">Tired of multiple and inaccurate results?</p>
      <p className="p12">Unlike our competitors who do traditional and simple direct searches and matching, Endato API Searches 1000’s of sub-calls, taking variations, misspellings, and partial versions finding as many matches as possible, scoring each one, and then only returning the highest result if considered a strong match.</p>
    </div>
  </div>
</div>
    <h3 style={{textAlign:'center',fontSize:40}}>
    And That's It!
    </h3>
    <p style={{textAlign:'center',fontSize:18,width:600,marginLeft:650}}>
    With that you will be given a final estimate, you confirm the order and wait for your appended file to be completed (usually within minutes!)
    </p>
    <button className='button-s'>Upload Now</button>
</div>
</div>
<Footer />
</div> 
)}

export default NewApp3;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import APPBAR from '../small components/AppBar2';
import IMG from '../images/blackhole.jpg'
import '../css/Workplace.css'
import Footer from '../small components/Footer2';
const Workplace = () => {
  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    const [selectedText, setSelectedText] = useState(null);
  
    const handleTextClick = (text) => {
      setSelectedText(selectedText === text ? null : text);
    };

  return (
    <div>
        <APPBAR />
    <div>
    <h2 className='head-head2'>Workplace Directory</h2>
        <p style={{
            textAlign:'center',
            fontSize:'16'
        }}>
        Browse our directory and find emails and direct phone numbers of B2B business professionals. Endato people and business data has over 300+ Million Unique People and 210 Million Business Records.
        </p>
    </div>  
    <div style={{padding:40}} />  
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <div style={{ display: 'flex', gap: '10px', fontWeight: 'bold' }}>
        {alphabet.map((letter) => (
          <Link key={letter} to="#" style={{ textDecoration: 'none', color: '#333', fontSize: '22px',gap:'100px' }}>
            {letter}
          </Link>
        ))}
      </div>
    </div>
    <div style={{padding:40}} />
    <div style={{display:'flex'}}>
        <div className='paragrapgh-paragragh'>
        <h2>
            How to Use
        </h2>
        <p>Endato's Workplace directory allows you to browse through millions of work profiles, by finding users by their name, city and name, and state and name.
        </p>
        <p>
        We even have popular names listed on different letter pages.
        </p>
        <p>
        Looking to run a direct search for someone?
        </p>
        <p>
            <Link>Sign-up for Endato here</Link>and get access to our suite of data tools from API, Search, and Batch.
        </p>
        </div>
        <div className="accordion-container">
          <h3>FAQs</h3>
      <div className={`accordion-text ${selectedText === 'Text1' ? 'active' : ''}`} onClick={() => handleTextClick('Text1')}>
        Text 1
      </div>
      {selectedText === 'Text1' && (
        <div className="accordion-content">
          Content for Text 1
        </div>
      )}

      <div className={`accordion-text ${selectedText === 'Text2' ? 'active' : ''}`} onClick={() => handleTextClick('Text2')}>
        Text 2
      </div>
      {selectedText === 'Text2' && (
        <div className="accordion-content">
          Content for Text 2
        </div>
      )}

      <div className={`accordion-text ${selectedText === 'Text3' ? 'active' : ''}`} onClick={() => handleTextClick('Text3')}>
        Text 3
      </div>
      {selectedText === 'Text3' && (
        <div className="accordion-content">
          Content for Text 3
        </div>
      )}
    </div>
    </div>
    <div style={{display:'flex'}}>
    <div className='paragrapgh-paragragh'>
    <h2>
    News & Resources
        </h2>
        <p><Link>Endato Database Provider, Enformion, Wins 2023 MarTech Breakthrough Award f...
Data Augmentation vs. Data Enrichment
Get Familiar With Workplace Search API
Learning More About Property Verification
Optimize Your Customer Data with Email Verification
Are You Affected By Data Enrichment Fraud?
Understanding Data Enrichment AI
How Do Companies Use Data Enrichment?
</Link>
        </p>
    </div>
    <img  style={{marginLeft:100}} src={IMG} alt="" />
    </div>
    <Footer />
    </div>
  );
};

export default Workplace;

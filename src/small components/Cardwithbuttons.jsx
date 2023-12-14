import React, { useState } from 'react';
import '../css/CardWithButtons.css';

const CardWithButtons = () => {
  const [displayText, setDisplayText] = useState('Maximize Your Conversion Rates\nUse contact enrichment to find the right information for your target audience. Optimize your sales efforts with accurate contact information and reach higher conversion rates.');

  const handleButtonClick = (newText) => {
    setDisplayText(newText);
  };

  const splitText = (text) => {
    const lines = text.split('\n');
    return (
      <>
        <strong style={{ fontSize: '34px' }}>{lines[0]}</strong>
        {lines.slice(1).map((line, index) => (
          <React.Fragment key={index}>
            <br />
            {line}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="card-card-container">
      <div className="button-button-container">
        <button className='button-button-Card2' onClick={() => handleButtonClick('Maximize Your Conversion Rates\nUse contact enrichment to find the right information for your target audience. Optimize your sales efforts with accurate contact information and reach higher conversion rates.')}>Sales & Marketing</button>
        <button className='button-button-Card2' onClick={() => handleButtonClick('Build Thorough Candidate Profiles\nImprove your recruiting process with our Contact Enrichment API, helping build better contact information for your candidate, or finding someone new based on their specific background. Match candidates in your industry with the perfect position using Contact Enrichment API.')}>Recruiting & HR</button>
        <button className='button-button-Card2' onClick={() => handleButtonClick('Search People and Property Data\nAccess key details about properties and current homeowners with our Contact Enrichment API. Realtors can access accurate information about property owners and contact people of interest with full confidence.')}>Real Estate</button>
        <button className='button-button-Card2' onClick={() => handleButtonClick('Utilize Data-Enrichment Tools\nOur Contact Enrichment API can help your projects run smoothly with accurate data-gathering applications. Contact Enrichment data is easily integrated into existing larger platforms to help established services run more effectively.')}>Developers</button>
      </div>
      <div style={{position:'relative'}}>
      <div className='text-container'>
        <p className='head6'>{splitText(displayText)}</p>
      </div>
      </div>
    </div>
  );
};

export default CardWithButtons;

import React, { useState } from 'react';
import Logo from "../images/check_people_leads_logo.png"
import "../css/Landingpage.css"
const CircleButtonComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  }

  return (

    <div className="circle-button-container">
    <img
       src={Logo}
      alt="Logo"
      className="logo"
    />

<div className="button-row">
        <div className={`circle-button ${activeButton === 'Button 1' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 1')}>
          Name
        </div>
        <div className={`circle-button ${activeButton === 'Button 2' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 2')}>
          Button 2
        </div>
        <div className={`circle-button ${activeButton === 'Button 3' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 3')}>
          Button 3
        </div>
        <div className={`circle-button ${activeButton === 'Button 4' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 4')}>
          Button 4
        </div>
      </div>

    {activeButton === 'Button 1' && (
        <input
          type="text"
          placeholder="Enter text for Button 1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      )}

      {activeButton === 'Button 2' && (
        <input
          type="text"
          placeholder="Enter text for Button 2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      )}

      {activeButton === 'Button 3' && (
        <input
          type="text"
          placeholder="Enter text for Button 3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      )}

      {activeButton === 'Button 4' && (
        <input
          type="text"
          placeholder="Enter text for Button 4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      )}
    
  </div>
  );
};

export default CircleButtonComponent;
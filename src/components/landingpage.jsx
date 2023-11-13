import React, { useState } from 'react';
import Logo from "../images/check_people_leads_logo.png"
import "../css/Landingpage.css"
import Paragraph from '../small components/paragraph';
import Footer from '../small components/footer';
import CustomAppBar from '../small components/appbar';

const CircleButtonComponent = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('')
  const [activeButton, setActiveButton] = useState('Button 1');
  
  const handleButtonClick = (buttonLabel) => {
    setInputValue1('');
    setInputValue2('');
    setActiveButton(buttonLabel);
  }
  
  const handleSubmit = () => {
    alert(`Submitted: ${inputValue1}, ${inputValue2}`);
  }

  return (
    <div className='body-Home'>
      <CustomAppBar/>
    <div className="circle-button-container">
      <div className="logo-heading-container">
        <img
          src={Logo}
          alt="Logo"
          className="small-logo"
        />
      </div>

      <div className="button-row">
        <div className={`circle-button ${activeButton === 'Button 1' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 1')}>
          <div className="button-text">Name</div>
        </div>
        <div className={`circle-button ${activeButton === 'Button 2' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 2')}>
          <div className="button-text">Phone</div>
        </div>
        <div className={`circle-button ${activeButton === 'Button 3' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 3')}>
          <div className="button-text">Address</div>
        </div>
      </div>

      {activeButton === 'Button 1' && (
        <div className="input-field-container" style={{ display: 'flex' }}>
          <input
            type="text"
            placeholder="Enter text for First Name"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            className="input-field"
            style={{ width: '350px' }}
          />
          <input
            type="text"
            placeholder="Enter text for Last Name"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
            className="input-field"
            style={{ width: '350px' }}
          />
        </div>
      )}

      {activeButton === 'Button 2' && (
        <input
          type="text"
          placeholder="Enter text for Button 2"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          className="input-field"
        />
      )}

      {activeButton === 'Button 3' && (
        <input
          type="text"
          placeholder="Enter text for Button 3"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          className="input-field"
        />
      )}

      <button onClick={handleSubmit} className="submit-button">
        <div className="button-text">Submit</div>
      </button> 
    </div>
    <Paragraph/>
    <Footer/>
    </div>
  );
};

export default CircleButtonComponent;
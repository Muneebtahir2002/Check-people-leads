import React, { useState } from 'react';
import Logo from "../images/check_people_leads_logo.png"
import "../css/Landingpage.css"
const CircleButtonComponent = () => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('')
  const [activeButton, setActiveButton] = useState(null);
  
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  }
  const handleSubmit = () => {
    alert(`Submitted: Value1 - ${inputValue1}, Value2 - ${inputValue2}`);
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
        <div className="button-text">Name</div>
        </div>
        <div className={`circle-button ${activeButton === 'Button 2' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 2')}>
        <div className="button-text">Phone</div>
        </div>
        <div className={`circle-button ${activeButton === 'Button 3' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 3')}>
        <div className="button-text">Address</div>
        </div>
        <div className={`circle-button ${activeButton === 'Button 4' ? 'active' : ''}`} onClick={() => handleButtonClick('Button 4')}>
        <div className="button-text">Email</div>
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
           style={{ width: '200px' }}
         />
         <input
           type="text"
           placeholder="Enter text for Last Name"
           value={inputValue2}
           onChange={(e) => setInputValue2(e.target.value)}
           className="input-field"
           style={{ width: '200px' }}
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

      {activeButton === 'Button 4' && (
        <div className="input-field-container" style={{ display: 'flex' }}>
        <input
          type="email"
          placeholder="Enter text for Email"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          className="input-field"
          style={{ width: '200px' }}
        />
        <input
          type="password"
          placeholder="Enter text for Password"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
          className="input-field"
          style={{ width: '200px' }}
        />
      </div>
      )}
       <button onClick={handleSubmit} className="submit-button">
       <div className="button-text">Submit</div>
      </button>
    
  </div>
  );
};

export default CircleButtonComponent;
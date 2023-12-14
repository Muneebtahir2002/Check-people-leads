import React, { useState } from 'react';
import '../css/CardRow.css';

const CardRow = () => {
    const [selectedOption, setSelectedOption] = useState('For All Data');

  const cardsData = [
    { id: 1, category: 'People Data',  iconColor: '#3498db', heading: 'Address Autocomplete', text1: 'Fast and verified addresses returned after every keystroke', text2: 'addresses' },
    { id: 2, category: 'People Data', iconColor: '#3498db', heading: 'AddressID', text1: 'Description 2', text2: 'Additional Info 2' },
    { id: 3, category: 'Bussiness Data', iconColor: '#3498db', heading: 'Business Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 4, category: 'People Data', iconColor: '#3498db', heading: 'CallerID', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 5, category: 'People Data', iconColor: '#3498db', heading: 'Census Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 6, category: 'People Data', iconColor: '#3498db', heading: 'Contact Enrichment', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 7, category: 'People Data', iconColor: '#3498db', heading: 'ContactID', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 8, category: 'Court Record Data', iconColor: '#3498db', heading: 'Criminal Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 9, category: 'License Data', iconColor: '#3498db', heading: 'DEA License', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 10, category: 'People Data', iconColor: '#3498db', heading: 'Debt Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 11, category: 'People Data', iconColor: '#3498db', heading: 'Divorce Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 12, category: 'Bussiness Data', iconColor: '#3498db', heading: 'Domain Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 13, category: 'People Data', iconColor: '#3498db', heading: 'Email ID', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 14, category: 'Court Record Data', iconColor: '#3498db', heading: 'Eviction Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 15, category: 'Court Record Data', iconColor: '#3498db', heading: 'Foreclosure Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 16, category: 'People Data', iconColor: '#3498db', heading: 'Identity Verification', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 17, category: 'People Data', iconColor: '#3498db', heading: 'Marriage Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 18, category: 'Asset Data', iconColor: '#3498db', heading: 'OFAC Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 19, category: 'People Data', iconColor: '#3498db', heading: 'Person Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 20, category: 'License Data', iconColor: '#3498db', heading: 'ProLicense Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 21, category: 'Property Data', iconColor: '#3498db', heading: 'Property Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 22, category: 'People Data', iconColor: '#3498db', heading: 'Reverse Phone Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 23, category: 'Asset Data', iconColor: '#3498db', heading: 'Vehicle Ownership Search', text1: 'Description 3', text2: 'Additional Info 3' },
    { id: 24, category: 'Bussiness Data', iconColor: '#3498db', heading: 'Workplace Search', text1: 'Description 3', text2: 'Additional Info 3' },
   ];

   const filteredCards = selectedOption === 'For All Types'
  ? cardsData
  : cardsData.filter(card => card.category === selectedOption || selectedOption === 'For All Types');


    const dropdownOptions = ['For All Types', 'Asset Data', 'Bussiness Data', 'Court Record Data', 'License Data', 'People Data', 'Property Data'];


  return (
    <div>
      <div className='dropdown-container'>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className='dropdown-menu'
      >
        {dropdownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>
      <div className="card-row-container">
        {filteredCards.map((card) => (
          <div key={card.id} className="cardrow">
            <div className="iconRow" style={{ backgroundColor: card.iconColor }}>
              <span>Icon</span>
            </div>
            <div className="content">
              <h3>{card.heading}</h3>
              <p>{card.text1}</p>
            </div>
            <div className="light-text">
              <p>{card.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRow;

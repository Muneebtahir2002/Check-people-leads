import React from 'react';
import '../css/Table.css'; 
import IMG from '../images/check_people_leads_logo.png'
const Table = () => {
  const data = [
    { name: 'Pricing', desc: 'No Risk usage for new customers with 100 free matches a month, no setup or monthly fees, and no contract or minimums.', age: 'Heavy Contracts slow onboarding new customers with complicated pricing, high minimums, and long commitments.' },
    { name: 'Onboarding', desc: 'No Coding Necessary for easy first-time set up and long term use.', age: 'Coding Required for using and setting up API products.'},
    { name: 'Data Quality', desc: 'Deep Data is our biggest strength with 120+ billion records, over 6,000 datasources, and daily refreshed data.', age: 'Outdated Data is a common issue with other data providers, lowering customers confidence and capabilities.'},
    { name: 'Linkage / Relationship', desc: 'Accurate Data Linking between multiple information sources, connecting business, property, and personal data to one another.',age:'Minimal Linking between data sources and less contact data assigned to businesses, people, and property.' },
    { name: 'Depth of Data', desc: 'Deep Data across People, Public Records, Property, Business, Assets, Licenses, Criminal, and Court records.', age: 'Limited Data with People (professional only) and Business Data.'},
  ];

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th></th>
          <th> <img src={IMG} alt="pic" /> </th>
          <th>Alternatives</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.desc}</td>
            <td>
             <td>{row.age} </td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React, { useState } from 'react';
import '../css/SwitchButton.css';
import LeftComponent from './LeftComponent';

const SwitchButton = () => {
  const [isLeft, setIsLeft] = useState(true);

  const handleToggle = () => {
    setIsLeft((prevIsLeft) => !prevIsLeft);
  };

  const LeftData = {
    "FirstName": "John",
    "LastName": "Smith",
    "Address": {
      "addressLine1": "1234 Main Street",
      "addressLine2": "Los Angeles, CA"
    }
  };
  const RightData = {
    "name": {
      "firstName": "John",
      "middleName": "Mitchell",
      "lastName": "Smith"
    },
    "age": "36",
    "addresses": [
      {
        "street": "1234 Main Street",
        "unit": "5",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90210",
        "firstReportedDate": "10/31/2015",
        "lastReportedDate": "7/1/2020"
      },
      {
        "street": "321 Rose Ave",
        "unit": "",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90292",
        "firstReportedDate": "11/9/2009",
        "lastReportedDate": "11/9/2009"
      },
      {
        "street": "1111 Another Street",
        "unit": "",
        "city": "Beverly Hills",
        "state": "CA",
        "zip": "90210",
        "firstReportedDate": "2/1/2006",
        "lastReportedDate": "2/1/2006"
      }
    ],
    "phones": [
      {
        "number": "(123) 456-7890",
        "type": "mobile",
        "isConnected": true,
        "firstReportedDate": "3/1/2006",
        "lastReportedDate": "7/1/2020"
      },
      {
        "number": "(987) 654-3210",
        "type": "landline",
        "isConnected": true,
        "firstReportedDate": "9/26/2008",
        "lastReportedDate": "3/20/2016"
      }
    ],
    "emails": [
      {
        "email": "jsmith@gmail.com"
      },
      {
        "email": "john.smith@somebusiness.com"
      },
      {
        "email": "js1222@someschool.edu"
      },
      {
        "email": "jsmith@anotherbiz.com"
      },
      {
        "email": "johnsmith@otheremail.com"
      }
    ]
  };
  
  

  return (
    <div className="switch-toggle-wrapper">
      <div className={`switch-toggle-container ${isLeft ? 'left' : 'right'}`} onClick={handleToggle}>
        <label className="label-left">Sample Request</label>
        <div className="toggle-button"></div>
        <label className="label-right">Sample Response</label>
      </div>
      <div className={`container-container ${isLeft ? 'left-content' : 'right-content'}`}>
        {isLeft ? <LeftComponent data={LeftData}/> : <LeftComponent data={RightData}/> }
      </div>
    </div>
  );
};

export default SwitchButton;

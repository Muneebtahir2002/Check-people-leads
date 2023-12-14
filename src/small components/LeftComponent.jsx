import React, { useRef } from 'react';
import '../css/LeftComponent.css';

const LeftComponent = ({ data }) => {
  const jsonTextRef = useRef(null);

  const handleCopyClick = () => {
    if (jsonTextRef.current) {
      jsonTextRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className="json-container">
      <textarea
        ref={jsonTextRef}
        className="json-textarea"
        readOnly
        value={JSON.stringify(data, null, 2)}
      />
      <button className="copy-button" onClick={handleCopyClick}>
        Copy
      </button>
    </div>
  );
};

export default LeftComponent;

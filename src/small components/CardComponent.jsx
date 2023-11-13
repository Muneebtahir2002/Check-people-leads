import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../css/IconWithText.css';

const IconWithText = ({ iconColor, text }) => {
  const firstPeriodIndex = text.indexOf('.');

  const firstLine = firstPeriodIndex !== -1 ? text.slice(0, firstPeriodIndex + 1) : text;
  const remainingLines = firstPeriodIndex !== -1 ? text.slice(firstPeriodIndex + 1) : '';

  return (
    <div className="icon-container">
      <div className="icon" style={{ backgroundColor: iconColor }}>
        <FaHeart size={30} color="white" />
      </div>
      <div className="text">
        <span className="bold">{firstLine}</span>
        {remainingLines && (
          <>
            <br />
            {remainingLines}
          </>
        )}
      </div>
    </div>
  );
};

export default IconWithText;

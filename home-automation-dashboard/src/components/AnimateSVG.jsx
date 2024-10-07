import React from 'react';


const AnimateSVG = () => {
  return (
    <div className="svg-container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="48px"
          fill="url(#gradient)"
          fontWeight="bold"
          className="flash-text"

        >
          Home Automation Dashboard
        </text>

    
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007bff" />
            <stop offset="100%" stopColor="#00ffcc" />
          
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimateSVG;

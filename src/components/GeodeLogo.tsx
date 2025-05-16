
import React from 'react';

interface GeodeLogoProps {
  className?: string;
}

const GeodeLogo = ({ className }: GeodeLogoProps) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#F5A623" />
        <path
          d="M15,15 L15,85 L85,85 L85,15 L15,15 Z M50,15 L85,15 M15,85 L50,85 M15,50 L50,15 M50,15 C65,30 65,70 50,85 M50,85 C35,70 35,30 50,15 M50,50 C65,35 85,50 85,50 C85,50 65,65 50,50 C35,65 15,50 15,50 C15,50 35,35 50,50 Z"
          stroke="#4A2A6F"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default GeodeLogo;

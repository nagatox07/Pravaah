import React from 'react';
import './BlackHole.css';

const BlackHole = () => {
  return (
    <div className="black-hole-container">
      <div className="black-hole">
        <div className="event-horizon"></div>
        <div className="accretion-disk"></div>
        <div className="glow-ring"></div>
      </div>
    </div>
  );
};

export default BlackHole;

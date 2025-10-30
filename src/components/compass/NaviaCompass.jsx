import React, { useState, useEffect } from 'react';
import './NaviaCompass.css';

const NaviaCompass = ({ gates = [] }) => {
  const [needleRotation, setNeedleRotation] = useState(0);

  useEffect(() => {
    // Gentle needle sway
    const interval = setInterval(() => {
      setNeedleRotation(prev => {
        const target = Math.sin(Date.now() / 1000) * 5;
        return prev + (target - prev) * 0.1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Default gates if none provided
  const activeGates = gates.length > 0 ? gates : [
    { id: 'B22', position: 25, direction: 'NNE', icon: '✈️' },
    { id: 'C15', position: 135, direction: 'SE', icon: '⏰' },
    { id: 'A5', position: 250, direction: 'WSW', icon: '🚶' },
  ];

  // Generate degree markers
  const degreeMarkers = [];
  const degreeNumbers = [];
  
  for (let i = 0; i < 360; i += 10) {
    degreeMarkers.push(
      <div
        key={`marker-${i}`}
        className={i % 30 === 0 ? 'degree-marker major' : 'degree-marker'}
        style={{ transform: `translate(-50%, 0) rotate(${i}deg)` }}
      />
    );
    
    if (i % 30 === 0) {
      degreeNumbers.push(
        <div
          key={`number-${i}`}
          className={i % 90 === 0 ? 'degree-number major' : 'degree-number'}
          style={{ transform: `rotate(${i}deg) translateY(-185px) rotate(-${i}deg)` }}
        >
          {i}
        </div>
      );
    }
  }

  return (
    <div className="navia-compass-container">
      <div className="navia-compass">
        {/* Luminous Glow */}
        <div className="luminous-glow"></div>

        {/* Navigation Pulse Rings */}
        <div className="nav-pulse"></div>
        <div className="nav-pulse delay-1"></div>
        <div className="nav-pulse delay-2"></div>

        {/* Outer Ring with Degrees */}
        <div className="compass-outer-ring">
          {degreeMarkers}
          {degreeNumbers}
        </div>

        {/* Cardinal Directions */}
        <div className="cardinal n">N</div>
        <div className="cardinal e">E</div>
        <div className="cardinal s">S</div>
        <div className="cardinal w">W</div>

        {/* Intercardinal Directions */}
        <div className="intercardinal ne">NE</div>
        <div className="intercardinal se">SE</div>
        <div className="intercardinal sw">SW</div>
        <div className="intercardinal nw">NW</div>

        {/* Gate Markers */}
        {activeGates.map((gate) => (
          <div
            key={gate.id}
            className="gate-marker"
            style={{ transform: `rotate(${gate.position}deg) translateY(-170px)` }}
            title={`Gate ${gate.id}`}
          >
            {gate.id}
          </div>
        ))}

        {/* Inner Face */}
        <div className="compass-inner">
          {/* Compass Rose Lines */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="rose-line"
              style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            />
          ))}
        </div>

        {/* Radar Sweep */}
        <div className="radar-sweep"></div>

        {/* Compass Needle */}
        <div
          className="compass-needle"
          style={{ transform: `translate(-50%, -100%) rotate(${needleRotation}deg)` }}
        >
          <div className="needle-north"></div>
          <div className="needle-south"></div>
        </div>

        {/* Center Hub */}
        <div className="compass-center"></div>

        {/* Status Indicator */}
        <div className="status-indicator">
          <div className="status-dot"></div>
          <span className="status-text">{activeGates.length} GATES ACTIVE</span>
        </div>
      </div>

      {/* Brand Name */}
      <div className="brand-name">
        <h2>NAVIA</h2>
        <p>Navigate Every Journey</p>
      </div>
    </div>
  );
};

export default NaviaCompass;

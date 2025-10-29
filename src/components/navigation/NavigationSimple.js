
// src/components/navigation/NavigationSimple.js

import React, { useState, useEffect } from 'react';

const NavigationSimple = () => {
  const [rotation, setRotation] = useState(0);
  const [userGate] = useState('B22');
  const [userDegrees] = useState(25);

  const gates = [
    { name: 'B22', degrees: 25 },
    { name: 'C15', degrees: 135 },
    { name: 'A5', degrees: 250 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const compassGatePositions = gates.map((gate) => {
    const angle = (gate.degrees - rotation) * (Math.PI / 180);
    const distance = 80;
    const x = 125 + distance * Math.cos(angle);
    const y = 125 + distance * Math.sin(angle);
    return { ...gate, x, y };
  });

  const getCompassDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>🧭 Gate Navigation</h2>
        <p style={styles.subtitle}>Find your way to your gate</p>
      </div>

      <div style={styles.compassContainer}>
        <svg width={250} height={250} style={styles.compassSvg}>
          {/* Compass circle */}
          <circle cx={125} cy={125} r={120} fill="none" stroke="#334155" strokeWidth={2} />

          {/* Cardinal directions */}
          <text x={125} y={25} textAnchor="middle" style={styles.directionText}>
            N
          </text>
          <text x={225} y={130} textAnchor="middle" style={styles.directionText}>
            E
          </text>
          <text x={125} y={225} textAnchor="middle" style={styles.directionText}>
            S
          </text>
          <text x={25} y={130} textAnchor="middle" style={styles.directionText}>
            W
          </text>

          {/* Concentric circles */}
          <circle cx={125} cy={125} r={80} fill="none" stroke="#1e293b" strokeWidth={1} opacity={0.5} />
          <circle cx={125} cy={125} r={40} fill="none" stroke="#1e293b" strokeWidth={1} opacity={0.5} />

          {/* Rotating needle pointing to user's gate */}
          <g transform={`rotate(${userDegrees} 125 125)`}>
            <line x1={125} y1={125} x2={125} y2={30} stroke="#0EA5E9" strokeWidth={3} />
            <polygon points="125,125 120,145 125,140 130,145" fill="#0EA5E9" />
          </g>

          {/* Gate markers */}
          {compassGatePositions.map((gate, idx) => (
            <g key={idx}>
              <circle
                cx={gate.x}
                cy={gate.y}
                r={12}
                fill={gate.name === userGate ? '#10b981' : '#0EA5E9'}
                opacity={0.8}
              />
              <text
                x={gate.x}
                y={gate.y + 1}
                textAnchor="middle"
                style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: 'white',
                  fill: 'white',
                }}
              >
                {gate.name}
              </text>
            </g>
          ))}

          {/* Center circle */}
          <circle cx={125} cy={125} r={8} fill="#0EA5E9" />
        </svg>
      </div>

      <div style={styles.gateInfo}>
        <div style={styles.gateLabel}>YOUR GATE</div>
        <div style={styles.gateNumber}>{userGate}</div>
        <div style={styles.gateDirection}>
          {userDegrees}° {getCompassDirection(userDegrees)} • 8 min walk
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '24px',
    backgroundColor: '#0f172a',
    minHeight: '100%',
  },
  header: {
    marginBottom: '24px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#e2e8f0',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: '0 0 24px 0',
  },
  compassContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
    backgroundColor: '#1a2332',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #334155',
  },
  compassSvg: {
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
  },
  directionText: {
    fontSize: '14px',
    fontWeight: '700',
    fill: '#0EA5E9',
    textAnchor: 'middle',
  },
  gateInfo: {
    backgroundColor: '#0EA5E9',
    backgroundColorWithAlpha: 'rgba(14, 165, 233, 0.1)',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid rgba(14, 165, 233, 0.3)',
    backgroundColor: 'rgba(14, 165, 233, 0.08)',
  },
  gateLabel: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '8px',
  },
  gateNumber: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#0EA5E9',
    marginBottom: '8px',
  },
  gateDirection: {
    fontSize: '14px',
    color: '#94a3b8',
  },
};

export default NavigationSimple;

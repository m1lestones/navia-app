import React from 'react';
import AppContainer from '../layout/AppContainer';
import NaviaCompass from '../compass/NaviaCompass';
import './NavigateComplete.css';

const NavigateComplete = () => {
  const gates = [
    { id: 'B22', position: 25, direction: 'NNE', icon: '✈️' },
    { id: 'C15', position: 135, direction: 'SE', icon: '⏰' },
    { id: 'A5', position: 250, direction: 'WSW', icon: '🚶' },
  ];

  return (
    <AppContainer statusText="NAVIGATION ACTIVE" showLiveStatus={true}>
      {/* Gate Info Card */}
      <div className="gate-info-card">
        <div className="gate-header-row">
          <div>
            <div className="gate-label">Your Gate</div>
            <div className="gate-number">B22</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="gate-label">Direction</div>
            <div className="gate-direction">🧭 25° NNE</div>
          </div>
        </div>
        <div className="gate-stats">
          <span>🚶 8 min walk</span>
          <span>📏 450 meters</span>
        </div>
      </div>

      {/* Compass */}
      <div className="compass-section">
        <NaviaCompass gates={gates} />
        <div className="compass-hint">
          Tap compass for detailed airport map
        </div>
      </div>

      {/* Wingmate Section */}
      <div className="wingmate-section">
        <div className="wingmate-avatar">🦅</div>
        <div className="wingmate-content">
          <div className="wingmate-name">WINGMATE AI</div>
          <div className="wingmate-message">
            Gate B22 is in Terminal B, northeast from your location. 
            Head towards the north signs and turn right. 🎯
          </div>
          <div className="message-time">2 minutes ago</div>
        </div>
      </div>

      {/* Nearby Gates */}
      <div className="nearby-gates">
        <div className="section-title">Nearby Gates</div>
        
        <div className="gate-list-item">
          <div className="gate-list-info">
            <div className="gate-list-icon">A5</div>
            <span className="gate-list-name">Gate A5</span>
          </div>
          <span className="gate-list-stats">250° • 12 min</span>
        </div>

        <div className="gate-list-item">
          <div className="gate-list-info">
            <div className="gate-list-icon">C15</div>
            <span className="gate-list-name">Gate C15</span>
          </div>
          <span className="gate-list-stats">135° • 6 min</span>
        </div>
      </div>
    </AppContainer>
  );
};

export default NavigateComplete;

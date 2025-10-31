import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContainer from '../layout/AppContainer';
import './Navigate.css';

const NavigateComplete = () => {
  const navigate = useNavigate();

  return (
    <AppContainer>
      {/* App Header */}
      <div className="app-header">
        <div className="app-logo">
          <div className="logo-icon">🧭</div>
          <div className="logo-text">NAVIA</div>
        </div>
        <div className="header-actions">
          <div className="icon-btn">👤</div>
          <div className="icon-btn">⚙️</div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar status-navigate">
        <div className="status-dot"></div>
        <span className="status-text">NAVIGATION ACTIVE</span>
      </div>

      {/* Main Content */}
      <div className="app-content">
        {/* Main Compass */}
        <div className="compass-container">
          <div className="compass-outer">
            <div className="compass-degrees">
              <span className="degree-marker" style={{top: '10px'}}>330</span>
              <span className="degree-marker" style={{top: '10px', right: '10px'}}>30</span>
              <span className="degree-marker" style={{top: '40%', left: '5px'}}>300</span>
              <span className="degree-marker" style={{top: '40%', right: '5px'}}>60</span>
              <span className="degree-marker" style={{top: '50%', left: '5px'}}>270</span>
              <span className="degree-marker" style={{top: '50%', right: '5px'}}>90</span>
              <span className="degree-marker" style={{bottom: '40px', left: '5px'}}>240</span>
              <span className="degree-marker" style={{bottom: '40px', right: '5px'}}>120</span>
            </div>

            <div className="compass-main">
              {/* Cardinal Directions */}
              <div className="cardinal cardinal-n">N</div>
              <div className="cardinal cardinal-e">E</div>
              <div className="cardinal cardinal-s">S</div>
              <div className="cardinal cardinal-w">W</div>

              {/* Intercardinal */}
              <div className="intercardinal intercardinal-nw">NW</div>
              <div className="intercardinal intercardinal-ne">NE</div>
              <div className="intercardinal intercardinal-sw">SW</div>
              <div className="intercardinal intercardinal-se">SE</div>

              {/* Gate Markers */}
              <div className="gate-marker gate-b22">
                <div className="gate-icon">🛫</div>
              </div>
              <div className="gate-marker gate-c15">
                <div className="gate-icon">⏰</div>
              </div>
              <div className="gate-marker gate-a5">
                <div className="gate-icon">🔔</div>
              </div>

              {/* Center Dot */}
              <div className="compass-center"></div>
            </div>
          </div>

          <div className="compass-status">
            <div className="status-dot"></div>
            <span>3 GATES ACTIVE</span>
          </div>
        </div>

        <div className="tap-hint">Tap compass for detailed airport map</div>

        {/* Wingmate Notification */}
        <div className="wingmate-notification" onClick={() => navigate('/wingmate')}>
          <div className="wingmate-avatar">🦅</div>
          <div className="wingmate-content">
            <div className="wingmate-label">WINGMATE AI</div>
            <div className="wingmate-message">
              Gate B22 is in Terminal B, northeast from your location. Head towards the north signs and turn right. 👉
            </div>
            <div className="wingmate-time">2 minutes ago</div>
          </div>
        </div>

        {/* Nearby Gates */}
        <div className="nearby-gates">
          <div className="section-title">NEARBY GATES</div>
          
          <div className="gate-item">
            <div className="gate-badge">A5</div>
            <div className="gate-info">
              <div className="gate-name">Gate A5</div>
              <div className="gate-direction">250° • 12 min</div>
            </div>
          </div>

          <div className="gate-item">
            <div className="gate-badge">C15</div>
            <div className="gate-info">
              <div className="gate-name">Gate C15</div>
              <div className="gate-direction">135° • 6 min</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/')}>
          <div className="nav-icon">✈️</div>
          <div className="nav-label">Flights</div>
        </div>
        <div className="nav-item active">
          <div className="nav-icon">🧭</div>
          <div className="nav-label">Navigate</div>
        </div>
        <div className="nav-item" onClick={() => navigate('/automate')}>
          <div className="nav-icon">⚡</div>
          <div className="nav-label">Automate</div>
        </div>
        <div className="nav-item" onClick={() => navigate('/profile')}>
          <div className="nav-icon">👤</div>
          <div className="nav-label">Profile</div>
        </div>
      </div>
    </AppContainer>
  );
};

export default NavigateComplete;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContainer from '../layout/AppContainer';
import './Dashboard.css';

const Dashboard = () => {
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
      <div className="status-bar">
        <div className="status-dot"></div>
        <span className="status-text">LIVE TRACKING</span>
      </div>

      {/* Main Content */}
      <div className="app-content">
        {/* Flight Card */}
        <div className="flight-card">
          <div className="flight-header">
            <div className="flight-number">AA 1234</div>
            <div className="flight-status">
              <div className="status-indicator"></div>
              IN FLIGHT
            </div>
          </div>

          <div className="flight-route">
            <div className="airport">
              <div className="airport-code">JFK</div>
              <div className="airport-city">New York</div>
            </div>

            <div className="flight-progress">
              <div className="flight-icon">✈️</div>
              <div className="flight-time">
                <div className="time-left">14:30</div>
                <div className="time-remaining">2h 15m remaining</div>
                <div className="time-right">19:45</div>
              </div>
            </div>

            <div className="airport">
              <div className="airport-code">LAX</div>
              <div className="airport-city">Los Angeles</div>
            </div>
          </div>

          <div className="flight-details">
            <div className="detail-item">
              <div className="detail-label">GATE</div>
              <div className="detail-value">B22</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">SEAT</div>
              <div className="detail-value">12A</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">ALTITUDE</div>
              <div className="detail-value">35K ft</div>
            </div>
          </div>

          <div className="mini-compass">
            <div className="compass-ring"></div>
            <div className="compass-dot"></div>
          </div>
        </div>

        {/* Wingmate Notification */}
        <div className="wingmate-notification" onClick={() => navigate('/wingmate')}>
          <div className="wingmate-avatar">🦅</div>
          <div className="wingmate-content">
            <div className="wingmate-label">WINGMATE AI</div>
            <div className="wingmate-message">
              You're halfway there! Flight is on schedule. I'll alert you 30 minutes before landing. ✨
            </div>
            <div className="wingmate-time">Just now</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <div className="action-btn">
            <div className="action-icon">📍</div>
            <div className="action-label">Track Map</div>
          </div>
          <div className="action-btn">
            <div className="action-icon">📞</div>
            <div className="action-label">Notify Contact</div>
          </div>
        </div>

        <div className="action-buttons">
          <div className="action-btn">
            <div className="action-icon">🚗</div>
            <div className="action-label">Book Ride</div>
          </div>
          <div className="action-btn" onClick={() => navigate('/automate')}>
            <div className="action-icon">⚙️</div>
            <div className="action-label">Automation</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon">✈️</div>
          <div className="nav-label">Flights</div>
        </div>
        <div className="nav-item" onClick={() => navigate('/navigate')}>
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

export default Dashboard;
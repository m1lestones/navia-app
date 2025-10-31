import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContainer from '../layout/AppContainer';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AppContainer>
      {/* App Header */}
      <div className="app-header">
        <div className="app-logo">
          <div className="logo-icon">🧭</div>
          <div className="logo-text">NAVIA</div>
        </div>
        <div className="header-actions">
          <div className="icon-btn">🔔</div>
          <div className="icon-btn">⚙️</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="app-content profile-content">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <h2>Travel Profile</h2>
          <p>demo@navia.com</p>
        </div>

        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">24</div>
            <div className="stat-label">Flights Tracked</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">8</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">12</div>
            <div className="stat-label">Workflows</div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Account Settings</h3>
          <div className="settings-item">
            <span>✈️ Preferred Airlines</span>
            <span className="settings-value">United, Delta</span>
          </div>
          <div className="settings-item">
            <span>🏠 Home Airport</span>
            <span className="settings-value">JFK</span>
          </div>
          <div className="settings-item">
            <span>🔔 Notifications</span>
            <span className="settings-value">Enabled</span>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Sign Out
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={() => navigate('/')}>
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
        <div className="nav-item active">
          <div className="nav-icon">👤</div>
          <div className="nav-label">Profile</div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Profile;
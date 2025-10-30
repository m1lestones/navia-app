import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AppContainer.css';

const AppContainer = ({ children, statusText = 'LIVE TRACKING', showLiveStatus = true }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: '✈️', label: 'Flights' },
    { path: '/navigate', icon: '🧭', label: 'Navigate' },
    { path: '/automate', icon: '⚡', label: 'Automate' },
    { path: '/profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <div className="phone-mockup">
      <div className="phone-notch"></div>
      <div className="phone-screen">
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
        {showLiveStatus && (
          <div className="live-status">
            <div className="live-dot"></div>
            <span className="live-text">{statusText}</span>
          </div>
        )}
        <div className="app-content">{children}</div>
        <div className="bottom-nav">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={'nav-item' + (location.pathname === item.path ? ' active' : '')}
              onClick={() => navigate(item.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppContainer;

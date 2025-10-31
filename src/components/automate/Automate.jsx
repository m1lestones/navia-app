import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContainer from '../layout/AppContainer';
import './Automate.css';

const Automate = () => {
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
      <div className="status-bar status-automate">
        <div className="status-dot"></div>
        <span className="status-text">3 WORKFLOWS ACTIVE</span>
      </div>

      {/* Main Content */}
      <div className="app-content">
        <div className="page-title">
          <h2>⚡ Automation</h2>
          <p>Set it and forget it workflows</p>
        </div>

        {/* Workflow 1: Notify Family */}
        <div className="workflow-card">
          <div className="workflow-header">
            <div className="workflow-status">
              <div className="active-dot"></div>
              <span className="status-label">ACTIVE</span>
            </div>
            <span className="workflow-trigger">When landing</span>
          </div>

          <div className="workflow-icon">📱</div>
          <div className="workflow-title">Notify Family</div>
          <div className="workflow-description">
            Send SMS to Mom: "Landed safely! ✈️"
          </div>

          <div className="workflow-tags">
            <span className="tag">Flight AA 1234</span>
            <span className="tag">SMS</span>
          </div>
        </div>

        {/* Workflow 2: Request Uber */}
        <div className="workflow-card">
          <div className="workflow-header">
            <div className="workflow-status">
              <div className="active-dot"></div>
              <span className="status-label">ACTIVE</span>
            </div>
            <span className="workflow-trigger">30 min before landing</span>
          </div>

          <div className="workflow-icon">🚗</div>
          <div className="workflow-title">Request Uber</div>
          <div className="workflow-description">
            Book Uber to "123 Main St, Los Angeles"
          </div>

          <div className="workflow-tags">
            <span className="tag">Flight AA 1234</span>
            <span className="tag">Uber API</span>
          </div>
        </div>

        {/* Workflow 3: Email Boss */}
        <div className="workflow-card">
          <div className="workflow-header">
            <div className="workflow-status">
              <div className="active-dot"></div>
              <span className="status-label">ACTIVE</span>
            </div>
            <span className="workflow-trigger">On delay</span>
          </div>

          <div className="workflow-icon">📧</div>
          <div className="workflow-title">Email Boss</div>
          <div className="workflow-description">
            "My flight is delayed. Will be late to meeting."
          </div>

          <div className="workflow-tags">
            <span className="tag">All flights</span>
            <span className="tag">Email</span>
          </div>
        </div>

        {/* Wingmate Notification */}
        <div className="wingmate-notification" onClick={() => navigate('/wingmate')}>
          <div className="wingmate-avatar">🦅</div>
          <div className="wingmate-content">
            <div className="wingmate-label">WINGMATE AI</div>
            <div className="wingmate-message">
              All your automations are set! I'll handle everything while you relax. Want to add calendar sync? 📅
            </div>
            <div className="wingmate-time">1 hour ago</div>
          </div>
        </div>

        {/* Create New Workflow Button */}
        <div className="create-workflow-btn">
          <div className="create-icon">➕</div>
          <div className="create-title">Create New Workflow</div>
          <div className="create-subtitle">Automate your next trip</div>
        </div>
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
        <div className="nav-item active">
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

export default Automate;
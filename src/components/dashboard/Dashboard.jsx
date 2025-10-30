import React from 'react';
import AppContainer from '../layout/AppContainer';

const Dashboard = () => {
  return (
    <AppContainer statusText="LIVE TRACKING" showLiveStatus={true}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#0EA5E9', fontSize: '2rem', marginBottom: '20px' }}>
          ✈️ Flight Dashboard
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>
          Your flights will appear here
        </p>
      </div>
    </AppContainer>
  );
};

export default Dashboard;
import React from 'react';
import './AppContainer.css';

const AppContainer = ({ children }) => {
  return (
    <div className="app-container">
      <div className="phone-mockup">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
import React from 'react';
import './AppContainer.css';

const AppContainer = ({ children }) => {
  return (
    <div className="app-container">
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default AppContainer;
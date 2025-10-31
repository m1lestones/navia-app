import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import NavigateComplete from './components/navigation/NavigateComplete';
import WingmateChat from './components/wingmate/WingmateChat';
import Automate from './components/automate/Automate';
import Profile from './components/profile/Profile';
import './styles/index.css';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/navigate" 
          element={
            <ProtectedRoute>
              <NavigateComplete />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/wingmate" 
          element={
            <ProtectedRoute>
              <WingmateChat />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/automate" 
          element={
            <ProtectedRoute>
              <Automate />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import apiService from '../../services/api-service';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await apiService.login({ email, password });
      localStorage.setItem('token', response.token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-phone-mockup">
        <div className="auth-phone-notch"></div>
        <div className="auth-phone-screen">
          {/* NAVIA Branding */}
          <div className="auth-branding">
            <div className="auth-logo-large">🧭</div>
            <h1 className="auth-title">NAVIA</h1>
            <p className="auth-tagline">Navigate Every Journey</p>
          </div>

          {/* Login Card */}
          <div className="auth-content">
            <div className="auth-card">
              <h2 className="auth-card-title">Welcome Back</h2>
              <p className="auth-card-subtitle">Sign in to continue your journey</p>

              {error && (
                <div className="auth-error">
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="auth-input-group">
                  <label className="auth-label">Email</label>
                  <input
                    type="email"
                    className="auth-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="auth-input-group">
                  <label className="auth-label">Password</label>
                  <input
                    type="password"
                    className="auth-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="auth-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="auth-spinner"></span>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <span>��</span>
                      Login
                    </>
                  )}
                </button>
              </form>

              <div className="auth-footer">
                <p>Don't have an account?</p>
                <Link to="/register" className="auth-link">
                  Register here →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="auth-bottom-decoration">
            <div className="auth-decoration-line"></div>
            <div className="auth-decoration-dot"></div>
            <div className="auth-decoration-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

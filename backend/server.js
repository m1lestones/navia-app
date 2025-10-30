require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./auth-routes');
const { authenticateToken } = require('./auth-middleware');

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173', 'https://navia-app-ruby.vercel.app'],
  credentials: true
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Navia API is running' });
});

app.use('/api/auth', authRoutes);

app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Profile data', user: req.user });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('🚀 Navia Backend running on http://localhost:3000');
});

module.exports = app;

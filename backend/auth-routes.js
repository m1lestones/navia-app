const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken, generateRefreshToken } = require('./auth-middleware');
const router = express.Router();
const users = [];

router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
    if (users.find(u => u.email === email)) return res.status(409).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, email, password: hashedPassword, name };
    users.push(newUser);
    const token = generateToken(newUser);
    const refreshToken = generateRefreshToken(newUser);
    res.status(201).json({ message: 'User registered', token, refreshToken, user: { id: newUser.id, email, name } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
    const user = users.find(u => u.email === email);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);
    res.json({ message: 'Login successful', token, refreshToken, user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
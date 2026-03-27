const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user database for demonstration
let users = [];

// POST /signup route for user registration
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered successfully!');
});

// POST /login route for user authentication
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials!');
    }
});

// POST /google route for Google OAuth
router.post('/google', (req, res) => {
    // OAuth logic goes here (pseudo-code)
    const token = ''; // Assume we get a token from Google
    res.json({ token });
});

module.exports = router;
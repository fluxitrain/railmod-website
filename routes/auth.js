const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Mock user database  
let users = [];  

// Register route  
router.post('/register', async (req, res) => {  
    const { username, password } = req.body;  
    const hashedPassword = await bcrypt.hash(password, 10);  
    users.push({ username, password: hashedPassword });  
    res.status(201).send('User registered');  
});  

// Admin login route  
router.post('/login', async (req, res) => {  
    const { username, password } = req.body;  
    const user = users.find(user => user.username === username);  
    if (!user) {  
        return res.status(400).send('User not found');  
    }  
    const isValidPassword = await bcrypt.compare(password, user.password);  
    if (!isValidPassword) {  
        return res.status(400).send('Invalid password');  
    }  

    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });  
    res.json({ token });  
});  

// JWT verification middleware  
function verifyToken(req, res, next) {  
    const token = req.headers['authorization'];  
    if (!token) return res.sendStatus(403);  
    jwt.verify(token.split(' ')[1], 'secret', (err, decoded) => {  
        if (err) return res.sendStatus(403);  
        req.user = decoded;  
        next();  
    });  
}

// Protected route example  
router.get('/protected', verifyToken, (req, res) => {  
    res.send('This is a protected route.');  
});  

module.exports = router;
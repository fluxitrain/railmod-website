const express = require('express');
const router = express.Router();

// Middleware for admin authentication
function adminAuth(req, res, next) {
    // Implement your admin authentication logic here
    // For example:
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(403).json({ message: 'Forbidden' });
    }
}

// Mock bus data (replace this with your database logic)
let buses = [];

// Get all buses
router.get('/', (req, res) => {
    res.json(buses);
});

// Add a new bus
router.post('/', adminAuth, (req, res) => {
    const newBus = req.body;
    buses.push(newBus);
    res.status(201).json(newBus);
});

// Update an existing bus
router.put('/:id', adminAuth, (req, res) => {
    const busId = req.params.id;
    const busIndex = buses.findIndex(bus => bus.id === busId);
    if (busIndex !== -1) {
        buses[busIndex] = { ...buses[busIndex], ...req.body };
        res.json(buses[busIndex]);
    } else {
        res.status(404).json({ message: 'Bus not found' });
    }
});

// Delete a bus
router.delete('/:id', adminAuth, (req, res) => {
    const busId = req.params.id;
    buses = buses.filter(bus => bus.id !== busId);
    res.status(204).send();
});

module.exports = router;

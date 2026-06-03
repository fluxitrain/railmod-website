const mongoose = require('mongoose');

// Transaction Schema for Robux transactions
const transactionSchema = new mongoose.Schema({
    buyer: {
        type: String,
        required: true
    },
    busPurchased: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now  // sets the current date by default
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Cancelled'],
        default: 'Pending'
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
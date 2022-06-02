const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Status = mongoose.model('Status', statusSchema);
module.exports = {Status};
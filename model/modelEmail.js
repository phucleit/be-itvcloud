const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const emailSchema = new mongoose.Schema({
    tengoi: {
        type: String,
        required: true,
    },
    chiphi: {
        type: String,
        required: true,
    },
    dungluong: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Email = mongoose.model('Email', emailSchema);
module.exports = {Email};
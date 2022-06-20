const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const reportSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    loaimay: {
        type: String,
        required: true
    },
    mamay: {
        type: String
    },
    tinhtrangmay: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    noidung: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Report = mongoose.model('Report', reportSchema);
module.exports = {Report};
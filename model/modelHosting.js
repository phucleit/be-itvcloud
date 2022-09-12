const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const hostingSchema = new mongoose.Schema({
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
    bangthong: {
        type: String,
    },
    subdomain: {
        type: String,
    },
    email: {
        type: String,
    },
    ftp: {
        type: String,
    },
    database: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Hosting = mongoose.model('Hosting', hostingSchema);
module.exports = {Hosting};
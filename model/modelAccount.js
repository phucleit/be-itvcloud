const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const accountSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
}, opts);

let Account = mongoose.model('Account', accountSchema);
module.exports = {Account};
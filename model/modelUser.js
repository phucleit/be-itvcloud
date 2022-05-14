const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const userSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
}, opts);

let User = mongoose.model('User', userSchema);
module.exports = {User};
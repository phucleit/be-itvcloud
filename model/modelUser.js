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
    createdAt: {
        type: Date,
        default: Date.now
    }
}, opts);

let User = mongoose.model('User', userSchema);
module.exports = {User};
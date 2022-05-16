const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model('User', userSchema);
module.exports = {User};
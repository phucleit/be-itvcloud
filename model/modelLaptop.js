const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const userLaptopSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    diachi: {
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
    noidung: {
        type: String
    },
    chiphi: {
        type: String
    },
    trangthai: {
        type: String,
        required: true,
    },
    phuongthucthanhtoan: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, opts);

let Laptop = mongoose.model('Laptop', userLaptopSchema);
module.exports = {Laptop};
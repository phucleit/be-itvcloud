const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const customerSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true
    },
    gioitinh: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ngaysinh: {
        type: Date
    },
    cmnd: {
        type: String,
        required: true
    },
    diachi: {
        type: String,
        required: true
    },
    thanhpho: {
        type: String
    },
    quocgia: {
        type: String
    },
    cmnd_mat_truoc: {
        type: String
    },
    cmnd_mat_sau: {
        type: String
    },
    // hinh_cmnd: {
    //     type: String
    // },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Customer = mongoose.model('Customer', customerSchema);
module.exports = {Customer};
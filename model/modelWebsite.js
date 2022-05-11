const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const userWebsiteSchema = new mongoose.Schema({
    hoten: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    nhanvienphutrach: {
        type: String,
        required: true
    },
    trangthai: {
        type: String,
        required: true
    },
    khuvuc: {
        type: String,
        required: true
    },
    goidungluong: {
        type: String,
        required: true
    },
    ghichu: {
        type: String
    }
}, opts);

let Website = mongoose.model('Website', userWebsiteSchema);
module.exports = {Website};
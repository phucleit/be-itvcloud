const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const sslSchema = new mongoose.Schema({
    tengoi: {
        type: String,
        required: true,
    },
    chiphi: {
        type: String,
        required: true,
    },
    chinhsachbaohiem: {
        type: String
    },
    domainbaomat: {
        type: String
    },
    dotincay: {
        type: String
    },
    address: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let SSL = mongoose.model('SSL', sslSchema);
module.exports = {SSL};
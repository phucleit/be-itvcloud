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
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service"
    },
    chiphi: {
        type: Number,
        required: true
    },
    ghichu: {
        type: String
    },
    createdAt: {
        type: Date
    },
    expiredAt: {
        type: Date
    },

}, opts);

let Website = mongoose.model('Website', userWebsiteSchema);
module.exports = {Website};
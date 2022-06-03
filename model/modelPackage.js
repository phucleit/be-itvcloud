const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const packageSchema = new mongoose.Schema({
    tengoi: {
        type: String,
        required: true
    },
    chiphi: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Package = mongoose.model('Package', packageSchema);
module.exports = {Package};
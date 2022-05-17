const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const permissionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    group_name: {
        type: String,
        required: true
    },
    group_id: {
        type: Number,
        required: true,
    },
    ability_key: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Permission = mongoose.model('Permission', permissionSchema);
module.exports = {Permission};
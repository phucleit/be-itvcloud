const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const serviceSchema = new mongoose.Schema({
    tengoidv: {
        type: String,
        required: true,
    },
    motagoidv: {
        type: String
    },
    website: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Website"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Service = mongoose.model('Service', serviceSchema);
module.exports = {Service};
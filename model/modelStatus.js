const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
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

let Status = mongoose.model('Status', statusSchema);
module.exports = {Status};
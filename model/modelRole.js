const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };

const roleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Permission"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, opts);

let Role = mongoose.model('Role', roleSchema);
module.exports = {Role};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RewardSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 50
    },
    imgURL: {
        type: String
    },
    description: {
        type: String
    },
    endDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Reward', RewardSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CampaignSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 50
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    socials: [{
        title: {
            type: String
        },
        link: {
            type: String
        },
        count: {
            type: Number
        }
    }],
    rewards: [{
        rewardId: {
            type: Schema.Types.ObjectId,
            ref: 'Reward'
        },
        totalCount: {
            type: Number,
            required: true
        },
        usedCount: {
            type: Number,
            default: 0
        }

    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Campaign', CampaignSchema);
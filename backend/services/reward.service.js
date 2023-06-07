const RewardModel = require('../models/reward.model');

exports.getAllRewards = async () => {
    return await RewardModel.find();
};

exports.createReward = async (reward) => {
    return await RewardModel.create(reward);
};
exports.getRewardById = async (id) => {
    return await RewardModel.findById(id);
};

exports.updateReward = async (id, reward) => {
    return await RewardModel.findByIdAndUpdate(id, reward);
};

exports.deleteReward = async (id) => {
    return await RewardModel.findByIdAndDelete(id);
};
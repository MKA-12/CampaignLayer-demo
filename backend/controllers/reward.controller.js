const rewardService = require("../services/reward.service");

exports.getAllRewards = async (req, res) => {
    try {
        const rewards = await rewardService.getAllRewards();
        res.status(200).json(rewards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createReward = async (req, res) => {
    try {
        const reward = await rewardService.createReward(req.body);
        res.status(201).json(reward);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRewardById = async (req, res) => {
    try {
        const reward = await rewardService.getRewardById(req.params.id);
        res.status(200).json(reward);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateReward = async (req, res) => {
    try {
        const reward = await rewardService.updateReward(req.params.id, req.body);
        res.status(200).json(reward);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteReward = async (req, res) => {
    try {
        const reward = await rewardService.deleteReward(req.params.id);
        res.status(200).json(reward);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

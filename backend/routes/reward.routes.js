const express = require('express');
const router = express.Router();

const rewardController = require('../controllers/reward.controller');

router.route("/").get(rewardController.getAllRewards).post(rewardController.createReward);
router.route("/:id").get(rewardController.getRewardById).put(rewardController.updateReward).delete(rewardController.deleteReward);

module.exports = router;
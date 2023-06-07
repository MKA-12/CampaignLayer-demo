const express = require('express');
const router = express.Router();

const campaignController = require('../controllers/campaign.controller');

router.route("/").get(campaignController.getAllCampaigns).post(campaignController.createCampaign);
router.route("/:id").get(campaignController.getCampaignById).put(campaignController.updateCampaign).delete(campaignController.deleteCampaign);

module.exports = router;
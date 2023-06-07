const campaignService = require("../services/campaign.service");

exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await campaignService.getAllCampaigns();
        res.status(200).json(campaigns);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.createCampaign(req.body);
        res.status(201).json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCampaignById = async (req, res) => {
    try {
        const campaign = await campaignService.getCampaignById(req.params.id);
        res.status(200).json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.updateCampaign(req.params.id, req.body);
        res.status(200).json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.deleteCampaign(req.params.id);
        res.status(200).json(campaign);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

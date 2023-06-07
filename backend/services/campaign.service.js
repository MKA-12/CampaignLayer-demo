const CampaignModel = require('../models/campaign.model');

exports.getAllCampaigns = async () => {
    return await CampaignModel.find();
};

exports.createCampaign = async (campaign) => {
    return await CampaignModel.create(campaign);
};
exports.getCampaignById = async (id) => {
    return await CampaignModel.findById(id);
};

exports.updateCampaign = async (id, campaign) => {
    return await CampaignModel.findByIdAndUpdate(id, campaign);
};

exports.deleteCampaign = async (id) => {
    return await CampaignModel.findByIdAndDelete(id);
};
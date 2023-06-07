import '../App.css';
import { useState, useEffect } from 'react';
import { campaignService } from '../data/api';

import Header from './campaign-list-components/header';
import CampaignList from './campaign-list-components/campaign-list';

export default function CampaignPage() {
    const [campaignList, setCampaignList] = useState([]);
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await campaignService.getAll();
                setCampaignList(data);
                setFilteredCampaigns(data);
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, [])

    const handleSearch = (searchTerm) => {
        const filtered = campaignList.filter((campaign) =>
        (campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
        ));
        setFilteredCampaigns(filtered);
    };

    const handleSort = (asc) => {
        const sortedCampaigns = [...(filteredCampaigns.filter((r) => r.rewards.length !== 0))].sort((a, b) => {
            const totalRemainingA = a.rewards.reduce((accumulator, curr) => {
                return accumulator + curr.totalCount - curr.usedCount;
            }, 0);
            const totalRemainingB = b.rewards.reduce((accumulator, curr) => {
                return accumulator + curr.totalCount - curr.usedCount;
            }, 0);
            return asc ? totalRemainingA - totalRemainingB : totalRemainingB - totalRemainingA;
        })
        setFilteredCampaigns(sortedCampaigns);
    };

    return (
        <div class="container content">
            <Header handleSearch={handleSearch} handleSort={handleSort} />
            <CampaignList allCampaigns={filteredCampaigns} />
        </div>
    );
}
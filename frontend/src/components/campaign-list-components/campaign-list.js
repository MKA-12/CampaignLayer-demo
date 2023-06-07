import '../styles/campaign-content.css';
import CampaignItem from './campaign-item';

export default function CampaignList({ allCampaigns }) {
    return (
        <div class="container campaign-list">
            {
                allCampaigns.map((campaignData) => {
                    return <CampaignItem campaign={campaignData} />;
                })
            }
        </div>
    );
}
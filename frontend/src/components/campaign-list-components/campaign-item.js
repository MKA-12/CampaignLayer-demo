import SocialsComponent from './socials-list';
import Rewards from './rewards';
import StatusBadge from './statusbadge';

export default function CampaignList({ campaign }) {
    return (
        <div class="card campaign-card" data-bs-theme="dark">
            <div class="row g-0" style={{ padding: "20px" }}>
                <div class="col-md-8">
                    <div class="card-body">
                        <StatusBadge startDate={campaign.startDate} endDate={campaign.endDate} />
                        <h2 class="card-title bolden">{campaign.title}</h2>
                        <p class="card-text">{campaign.description}</p>
                        {campaign.hasOwnProperty('socials') && <SocialsComponent socialsList={campaign.socials} />}
                    </div>
                </div>
                {campaign.hasOwnProperty('rewards') && campaign.rewards.length !== 0 && <Rewards rewardsList={campaign.rewards} />}
            </div>
        </div>
    );
}

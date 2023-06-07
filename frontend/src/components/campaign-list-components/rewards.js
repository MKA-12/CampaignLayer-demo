import '../styles/rewards-campaign.css';
import { useState, useEffect } from 'react';
import { rewardService } from '../../data/api';

export default function Rewards({ rewardsList }) {
    const [rewardsData, setRewardsData] = useState(rewardsList);

    useEffect(() => {
        const fetchRewardData = async (id) => {
            const updatedRewards = await Promise.all(
                rewardsList.map(async (reward) => {
                    const data = await rewardService.getById(reward.rewardId);
                    return { "title": data.title, ...reward };
                })
            );
            setRewardsData(updatedRewards);
        }
        fetchRewardData();
    })
    return (
        <div class="col-md-4 column-divider">
            <div class="card-body">
                <h5 class="card-title rewards-title">Rewards</h5>
                <div className="container">
                    {
                        rewardsData.map((reward) => {
                            return (
                                <div className="row reward-row">
                                    <div className="col reward-title">{reward.title}</div>
                                    <div className="col rewards-left">{reward.usedCount}/{reward.totalCount}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}
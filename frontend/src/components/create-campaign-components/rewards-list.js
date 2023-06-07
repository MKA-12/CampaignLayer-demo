import { useState, useEffect } from "react";
import { rewardService } from "../../data/api";

export default function RewardsList({ handleRewardsChange }) {
    const [rewardsList, setRewardsList] = useState([]);
    const [addedRewards, setAddedRewards] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await rewardService.getAll();
                setRewardsList(data);
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, [])

    const handleRewardAdd = (rewardId) => {
        const min = 1000;
        const max = 10000;
        const rnd1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const rnd2 = Math.floor(Math.random() * (max - min + 1)) + min;
        setAddedRewards([...addedRewards, {
            "rewardId": rewardId,
            "totalCount": rnd1 > rnd2 ? rnd1 : rnd2,
            "usedCount": rnd1 < rnd2 ? rnd1 : rnd2
        }]);
    };

    useEffect(() => {
        handleRewardsChange(addedRewards);
    }, [addedRewards]);

    const handleRewardRemove = (rewardId) => {
        const updatedRewards = addedRewards.filter((reward) => reward.rewardId !== rewardId);
        setAddedRewards(updatedRewards);
    };

    const dateFormat = (date) => {
        const curr = new Date(date);
        return curr.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    const daysLeft = (date) => {
        const isoDate = new Date(date);
        const currentDate = new Date();
        const differenceInMilliseconds = isoDate - currentDate;
        return (differenceInMilliseconds / (1000 * 60 * 60 * 24));
    }
    return (
        <div className="container rewards-component">
            <div className="bolden">Choose the Rewards</div>
            <div className="field-description">Choose Rewards for the campaign from the following list.</div>
            <div className="container rewards-list">
                {rewardsList.map((reward) => {
                    return (<div className="card reward-item">
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src="https://thumbs.dreamstime.com/b/sale-red-sign-sticker-isolated-white-background-40467403.jpg" alt="Card Image" className="card-img reward-img" />
                            </div>
                            <div className="col-md-8 d-flex flex-column justify-content-between">
                                <div className="card-body">
                                    <h5 className="card-title field-title">Promo</h5>
                                    <h5 className="card-title">{reward.title}</h5>
                                    <p className="card-text">{reward.description}</p>
                                </div>
                                <div className="card-footer reward-item-footer">
                                    <span className="field-description">Ends on <span className="reward-end-date">{dateFormat(reward.endDate)}</span></span>
                                    <span className="field-description reward-span">{daysLeft(reward.endDate) <= 0 ? "Expired" : <span> Expires in <span className="reward-end-date"> {Math.floor(daysLeft(reward.endDate))} days</span></span>}</span>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <AddReward rewardId={reward._id} isAdded={addedRewards.some((r) => r.rewardId === reward._id)} onRewardAdd={handleRewardAdd} onRewardRemove={handleRewardRemove} />
                            </div>
                        </div>
                    </div>);
                })}

            </div>
        </div>
    );
}

const AddReward = ({ rewardId, onRewardAdd, onRewardRemove, isAdded }) => {
    const handleButtonClick = () => {
        if (isAdded) {
            onRewardRemove(rewardId);
        } else {
            onRewardAdd(rewardId);
        }
    };
    return (
        <button className="btn btn-lg border reward-btn" onClick={handleButtonClick} >
            {isAdded ? "Remove" : "Add"}
        </button>
    );
}
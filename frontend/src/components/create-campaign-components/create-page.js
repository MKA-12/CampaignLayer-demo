import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../styles/create-campaign.css';
import '../styles/socials.css';
import RewardsList from './rewards-list';
import { campaignService } from "../../data/api";

export default function CreateCampaign() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const socialsListDefault = [
        { "title": "Instagram", 'link': "", "count": 0, },
        { "title": "Spotify", 'link': "", "count": 0, },
        { "title": "Twitter", 'link': "", "count": 0, }
    ]

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [socialsList, setSocialsList] = useState(socialsListDefault);
    const [rewardsList, setRewardsList] = useState([]);
    const [errors, setErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (title.trim() === '') {
            validationErrors.title = 'Campaign Title is required';
        }

        if (description.trim() === '') {
            validationErrors.description = 'Campaign Description is required';
        }

        if (startDate.trim() === '') {
            validationErrors.startDate = 'Start Date is required';
        }

        if (endDate.trim() === '') {
            validationErrors.endDate = 'End Date is required';
        }


        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const campaignObj = {
            "title": title,
            "description": description,
            "startDate": startDate,
            "endDate": endDate,
            "socials": socialsList.filter((l) => l.link !== '' && l.count !== 0),
            "rewards": rewardsList
        }
        campaignService.create(campaignObj).then((res) => {
            if (res.status === 201) {
                setTitle('');
                setDescription('');
                setStartDate('');
                setEndDate('');
                setSocialsList(socialsListDefault);
                setErrors({});
                setSubmitSuccess(true);
            }
            else {
                alert("Unable to publish campaign, server error.")
            }
        }
        );
    }

    const handleSocialsChange = (e, title, field) => {
        const updatedList = socialsList.map((social) => {
            if (social.title === title) {
                return { ...social, [field]: field === "count" ? parseInt(e.target.value, 10) : e.target.value };
            }
            return social;
        });

        setSocialsList(updatedList);
    }
    return (
        <div>
            <div class="container-fluid create-main">
                <div class="container create-header">
                    <div class="bolden">Campaign Details</div>
                    <div>
                        <div class="back-btn" onClick={handleGoBack}><i class="fa-solid fa-angle-left"></i> Go Back</div>
                        <button class="btn btn-primary publish-btn" onClick={handleSubmit}>Publish</button>
                    </div>
                </div>
                <div class="container create-form" data-bs-theme="dark">
                    {submitSuccess && (
                        <div class="alert alert-success" role="alert">
                            Form submitted successfully!
                        </div>
                    )}
                    <div class="mb-3 field">
                        <div class="field-title">
                            Campaign Name
                        </div>
                        <div class="field-description">What is the name of this campaign?</div>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            class={`form-control ${errors.title ? 'is-invalid' : ''}`}
                            placeholder="Eg. Like I Used To 100x Campaign"
                        />
                        {errors.title && (
                            <div class="invalid-feedback">{errors.title}</div>
                        )}
                    </div>
                    <div class="mb-3 field">
                        <div class="field-title">
                            Description
                        </div>
                        <div class="field-description">
                            Describe this campaign to your listeners. How does it work?
                        </div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            class={`form-control ${errors.description ? 'is-invalid' : ''
                                }`}
                            placeholder="How does this campaign work?"
                        ></textarea>
                        {errors.description && (
                            <div class="invalid-feedback">{errors.description}</div>
                        )}
                    </div>

                    <div class="row field">
                        <div class="col">
                            <label class="field-title">
                                Start Date
                            </label>
                            <input
                                type="datetime-local"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                class={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                            />
                            {errors.startDate && <div class="invalid-feedback">{errors.startDate}</div>}
                        </div>
                        <div class="col">
                            <label class="field-title">
                                End Date
                            </label>
                            <input
                                type="datetime-local"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                class={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
                            />
                            {errors.endDate && <div class="invalid-feedback">{errors.endDate}</div>}
                        </div>
                    </div>

                    {/* Socials Input */}
                    <div class="field">
                        <div class="field-title">Socials</div>
                        <div class="field-description">These are tasks of the campaign to be completed on various social media including sharing posts, listening to songs, retweeting etc. </div>
                        <div class="field-description"><i class="fab fa-instagram instagram-icon"></i> Instagram</div>
                        <div class="row">
                            <div class="col">
                                <div class="field-title">Instagram Profile Link</div>
                                <input type="url" value={socialsList.find((item) => item.title === "Instagram").link} onChange={(e) => handleSocialsChange(e, "Instagram", "link")} placeholder="Drop the link to the creator's insta handle" class="form-control" />
                            </div>
                            <div class="col">
                                <div class="field-title">Post Share Count</div>
                                <input type="number" value={socialsList.find((item) => item.title === "Instagram").count} onChange={(e) => handleSocialsChange(e, "Instagram", "count")} placeholder="Number of post shares to be made on Instagram" min="0" class="form-control" />
                            </div>
                        </div>
                        <div class="field-description"><i class="fab fa-spotify spotify-icon"></i> Spotify</div>
                        <div class="row">
                            <div class="col">
                                <div class="field-title">Spotify Profile Link</div>
                                <input type="url" value={socialsList.find((item) => item.title === "Spotify").link} onChange={(e) => handleSocialsChange(e, "Spotify", "link")} placeholder="Drop the link to the artist's spotify profile" class="form-control" />
                            </div>
                            <div class="col">
                                <div class="field-title">Listen Count</div>
                                <input type="number" value={socialsList.find((item) => item.title === "Spotify").count} onChange={(e) => handleSocialsChange(e, "Spotify", "count")} placeholder="Number of listens on spotify" min="0" class="form-control" />
                            </div>
                        </div>
                        <div class="field-description"><i class="fab fa-twitter twitter-icon"></i> Twitter</div>
                        <div class="row">
                            <div class="col">
                                <div class="field-title">Twitter Profile Link</div>
                                <input type="url" value={socialsList.find((item) => item.title === "Twitter").link} onChange={(e) => handleSocialsChange(e, "Twitter", "link")} placeholder="Drop the link to the creator's twitter handle" class="form-control" />
                            </div>
                            <div class="col">
                                <div class="field-title">Retweet Count</div>
                                <input type="number" value={socialsList.find((item) => item.title === "Twitter").count} onChange={(e) => handleSocialsChange(e, "Twitter", "count")} placeholder="Number of retweets to be made on twitter" min="0" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <RewardsList key={submitSuccess.toString()} handleRewardsChange={setRewardsList} />
                </div>
            </div>
        </div>
    )
}
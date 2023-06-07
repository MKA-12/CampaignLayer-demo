const rewardsModel = require('./models/reward.model')
const campaignModel = require('./models/campaign.model')
const rewards = [
    {
        "title": "20% Off on purchase",
        "description": "cool offer up for grabs!",
        "endDate": "2023-06-13T23:44:00.878Z",
        "imgURL": "https://thumbs.dreamstime.com/b/sale-red-sign-sticker-isolated-white-background-40467403.jpg",
    },
    {
        "title": "50% Off on purchase",
        "description": "cool offer up for grabs no 2!",
        "endDate": "2023-06-13T23:44:00.878Z",
        "imgURL": "https://thumbs.dreamstime.com/b/sale-red-sign-sticker-isolated-white-background-40467403.jpg",
    },
    {
        "title": "10% Off on purchase",
        "description": "cool offer up for grabs no 3!",
        "endDate": "2023-06-07T23:44:00.878Z",
        "imgURL": "https://thumbs.dreamstime.com/b/sale-red-sign-sticker-isolated-white-background-40467403.jpg",
    },
    {
        "title": "30% Off on purchase",
        "description": "cool offer up for grabs no 4!",
        "endDate": "2023-06-18T23:44:00.878Z",
        "imgURL": "https://thumbs.dreamstime.com/b/sale-red-sign-sticker-isolated-white-background-40467403.jpg",
    },

]
const campaigns = [
    {
        "title": "Early Adopter Reward Campaign",
        "description": "The ability of qubits to exist in multiple states simultaneously is called superposition.",
        "startDate": "2023-06-06T23:44:00.878Z",
        "endDate": "2023-06-13T23:44:00.878Z",
        "socials": [
            {
                "title": "Twitter",
                "link": "https://twitter.com/taylorswift13",
                "count": 13,
            },
            {
                "title": "Spotify",
                "link": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
                "count": 1989,
            },
            {
                "title": "Instagram",
                "link": "https://www.instagram.com/taylorswift/",
                "count": 5,
            }
        ],
        "rewards": [
            {
                "rewardId": "",
                "totalCount": 2500,
                "usedCount": 1800,
            },
            {
                "rewardId": "",
                "totalCount": 300,
                "usedCount": 150,
            },
            {
                "rewardId": "",
                "totalCount": 2000,
                "usedCount": 900,
            }
        ],
    },
    {
        "title": "Early Adopter Reward Campaign",
        "description": "The ability of qubits to exist in multiple states simultaneously is called superposition. Another one",
        "startDate": "2023-06-07T23:44:00.878Z",
        "endDate": "2023-06-18T23:44:00.878Z",
        "socials": [
            {
                "title": "Twitter",
                "link": "https://twitter.com/selenagomez",
                "count": 9,
            },
            {
                "title": "Instagram",
                "link": "https://www.instagram.com/selenagomez/",
                "count": 39,
            }
        ],
        "rewards": [
            {
                "rewardId": "",
                "totalCount": 200,
                "usedCount": 100,
            },
            {
                "rewardId": "",
                "totalCount": 3400,
                "usedCount": 1501,
            },
            {
                "rewardId": "",
                "totalCount": 200,
                "usedCount": 90,
            }
        ],
    },
    {
        "title": "New Campaign",
        "description": "this is a description",
        "startDate": "2023-06-08T18:45:00.000Z",
        "endDate": "2023-06-10T18:45:00.000Z",
        "socials": [
            {
                "title": "Instagram",
                "link": "https://www.instagram.com/taylorswift/",
                "count": 4,
            }
        ],
        "rewards": [
            {
                "rewardId": "",
                "totalCount": 7047,
                "usedCount": 2149,
            },
            {
                "rewardId": "",
                "totalCount": 4078,
                "usedCount": 1962,
            }
        ],
    },
    {
        "title": "testing",
        "description": "testing",
        "startDate": "2023-12-12T06:42:00.000Z",
        "endDate": "2023-12-15T06:42:00.000Z",
        "socials": [
            {
                "title": "Instagram",
                "link": "https://www.instagram.com/taylorswift/",
                "count": 4,
            }
        ],
        "rewards": [
            {
                "rewardId": "",
                "totalCount": 8659,
                "usedCount": 5017,
            }
        ],
    },
];

const insertTestData = () => {
    rewardsModel.create(rewards).then((res) => {
        console.log('Rewards added successfully');
        const rewardIds = res.map((r) => r._id);
        let i = 0;
        campaigns.forEach((mainObj) => {
            mainObj.rewards.forEach((nestedObj) => {
                nestedObj.rewardId = rewardIds[i];
                i++;
                if (i >= rewardIds.length) {
                    i = 0;
                }
            });
        });
        campaignModel.create(campaigns).then(() => {
            console.log('Campaigns added successfully');
        });
    }).catch((error) => { console.error('Error adding rewards', error); });
}

module.exports = insertTestData;
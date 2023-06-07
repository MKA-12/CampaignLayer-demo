const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/campaigndb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const campaignRouter = require('./routes/campaign.routes');
const rewardRouter = require('./routes/reward.routes');

app.use(express.json());
app.use('/api/campaigns', campaignRouter);
app.use('/api/rewards', rewardRouter);

let port = 4000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

const insertTestData = require("./test-data");
insertTestData();
module.exports = app;
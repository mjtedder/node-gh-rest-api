const axios = require('axios');
require('dotenv').config();

const { baseUrl, headers } = require('../constants'); 
const db = require('../db/db.json');
const { retrievePRNumbers } = require('../utils');


const getOpenPRData = async () => {
    try {
        const response = await axios.get(`${baseUrl}${db.owner}/${db.repo}/pulls`, headers);
        const openPullRequests = response.data.filter(pr => pr.state);
        if (openPullRequests.length) {
            db.prNumbers = retrievePRNumbers(openPullRequests);
        }
        return openPullRequests;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getOpenPRData
}
const axios = require('axios');
const db = require('../db/db.json');
const { baseUrl, headers } = require('../constants');

const retrievePRNumbers = (data) => {
    return data.map(pr => pr.number).sort((a,b) => a - b);
}

const getCommitsForOpenPRs = async (prNumber) => {
    try {
        const result = await axios.get(`${baseUrl}${db.owner}/${db.repo}/pulls/${prNumber}/commits`, headers);
        return result;
    } catch (err) {
        console.error(err);
    }
}

const processCommits = async () => {
    let results;
    for (let i = 0; i < db.prNumbers.length; i++) {
        results = await getCommitsForOpenPRs(db.prNumbers[i]);
        db.commits.push(`Number of commits for PR# ${db.prNumbers[i]} is: ${results.data.length}`);
    }
    return db.commits;
}

const storeUserData = (requestBody) => {
    if (Object.keys(requestBody).includes('user')) {
        db.owner = requestBody.user;
        db.repo = requestBody.repo;
    }
    return db;
}

module.exports = {
    retrievePRNumbers,
    processCommits,
    storeUserData
}
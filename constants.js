require('dotenv').config();

const baseUrl = `https://api.github.com/repos/octocat/hello-world/pulls`;
const headers = {
    headers: {
        'Authorization': process.env.client_secret,
        'User-Agent': process.env.client_id,
        'Accept': 'application/vnd.github.v3+json'
    }
}

module.exports = {
    baseUrl,
    headers
}
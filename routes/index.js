const path = require('path');
const { getOpenPRData } = require('../models');
const { processCommits, storeUserData } = require('../utils');

module.exports = app => {

    app.post('/api', async (req, res, next) => {
        try {
            await storeUserData(req.body);
            return res.redirect('/pull-requests');
        } catch (err) {
            next(err);
        }
    });

    app.get('/pull-requests', async (req, res, next) => {
        try {
            res.json({
                data: await getOpenPRData(req)
            });
        } catch (err) {
            next(err);
        }
    });

    app.get('/commits', async (req, res, next) => {
        try {
            res.json({
                data: await processCommits(req)
            });
        } catch (err) {
            next(err);
        }
    })

    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
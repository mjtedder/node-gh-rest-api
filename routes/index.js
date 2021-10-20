const path = require('path');
const { getOpenPRData } = require('../models');

module.exports = app => {


    app.get('/pull-requests', async(req, res, next) => {
        try {
            res.json({
                data: await getOpenPRData(req)
            });
        } catch (err) {
            next(err);
        }
    });

    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
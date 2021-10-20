const path = require('path');

module.exports = app => {
    app.get("*", (req, res) => {
        return res.send('Hello World');
    });
};
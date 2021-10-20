const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

require('./routes')(app);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
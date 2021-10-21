const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

require('./routes')(app);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
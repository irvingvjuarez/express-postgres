require('dotenv').config();

const express = require('express');
const config = require('./config');
const routing = require('./routers');

const app = express();
routing(app);

app.listen(config.port, () => {
    console.log('API listening at http://localhost:3000')
})
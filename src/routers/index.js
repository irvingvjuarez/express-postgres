const cors = require('cors');
const express = require('express');
const v1Router = require('./v1');

function routing(app) {
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Express + Postgres app working');
    })

    app.use('/api/v1', v1Router);
}

module.exports = routing;
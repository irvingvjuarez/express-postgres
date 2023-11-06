const cors = require('cors');
const express = require('express');
const v1Router = require('./v1');
const authorizeHandler = require('../middlewares/authorize.handler');
const { errorHandler, errorLogging, sequelizeErrorHandler } = require('../middlewares/error.handler');
const config = require('../config');

function routing(app) {
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Express + Postgres app working');
    })

    // authorization middlewares
    app.use(authorizeHandler)

    // api versioning
    app.use('/api/v1', v1Router);

    // api error middlewares
    app.use(errorLogging);
    app.use(sequelizeErrorHandler);
    app.use(errorHandler);
}

module.exports = routing;
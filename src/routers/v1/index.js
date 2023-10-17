const express = require('express');
const UsersRouter = require('./users.router');

const v1Router = express.Router();
v1Router.use('/users', UsersRouter);

module.exports = v1Router;

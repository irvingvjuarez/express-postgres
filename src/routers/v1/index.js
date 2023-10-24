const express = require('express');
const UsersRouter = require('./users.router');
const CustomerRouter = require('./customers.router');

const v1Router = express.Router();
v1Router.use('/users', UsersRouter);
v1Router.use('/customers', CustomerRouter);

module.exports = v1Router;

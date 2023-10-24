const express = require('express');
const UsersRouter = require('./users.router');
const CustomerRouter = require('./customers.router');
const CategoriesRouter = require('./category.router');
const ProductsRouter = require('./products.router');

const v1Router = express.Router();
v1Router.use('/users', UsersRouter);
v1Router.use('/customers', CustomerRouter);
v1Router.use('/categories', CategoriesRouter);
v1Router.use('/products', ProductsRouter);

module.exports = v1Router;

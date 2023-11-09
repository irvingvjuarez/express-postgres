const express = require('express');
const UsersRouter = require('./users.router');
const CustomerRouter = require('./customers.router');
const CategoriesRouter = require('./category.router');
const ProductsRouter = require('./products.router');
const OrdersRouter = require('./order.router');
const AuthRouter = require('./auth.router');
const ProfileRouter = require('./profile.router');

const v1Router = express.Router();
v1Router.use('/auth', AuthRouter);
v1Router.use('/users', UsersRouter);
v1Router.use('/customers', CustomerRouter);
v1Router.use('/categories', CategoriesRouter);
v1Router.use('/products', ProductsRouter);
v1Router.use('/orders', OrdersRouter);
v1Router.use('/profile', ProfileRouter);

module.exports = v1Router;

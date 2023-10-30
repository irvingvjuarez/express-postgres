const express = require('express');
const OrderController = require('../../controllers/order.controller');
const { createOrderSchema, getOrderSchema } = require('../../schemas/order.schema');
const validatorHandler = require('../../middlewares/validator.handler');

const OrdersRouter = express.Router();

OrdersRouter
    .get('/', OrderController.getAll)
    .get(
        '/:id', validatorHandler(getOrderSchema, 'params'),
        OrderController.getOne
    )
    .post(
        '/', validatorHandler(createOrderSchema, 'body'),
        OrderController.create
    )

module.exports = OrdersRouter;
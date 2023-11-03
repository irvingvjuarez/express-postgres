const express = require('express');
const OrderController = require('../../controllers/order.controller');
const { createOrderSchema, getOrderSchema, addItemSchema } = require('../../schemas/order.schema');
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
    .post(
        '/add-item', validatorHandler(addItemSchema, 'body'),
        OrderController.addItem
    )

module.exports = OrdersRouter;
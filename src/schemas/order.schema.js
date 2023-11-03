const Joi = require("joi");

exports.createOrderSchema = Joi.object({
    customerId: Joi.number().integer().required()
})

exports.getOrderSchema = Joi.object({
    id: Joi.number().integer().required()
})

exports.addItemSchema = Joi.object({
    orderId: Joi.number().integer().required(),
    productId: Joi.number().integer().required()
})
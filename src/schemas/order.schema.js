const Joi = require("joi");

exports.createOrderSchema = Joi.object({
    customerId: Joi.number().integer().required()
})

exports.getOrderSchema = Joi.object({
    id: Joi.number().integer().required()
})
const Joi = require("joi");

exports.createCustomerSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    userId: Joi.number().required()
})
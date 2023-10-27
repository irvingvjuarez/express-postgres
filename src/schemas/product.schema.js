const Joi = require("joi");

exports.createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    description: Joi.string().optional(),
    categoryId: Joi.number().integer().required()
})

exports.updateProductSchema = Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    image: Joi.string().optional(),
    description: Joi.string().optional(),
    categoryId: Joi.number().integer().optional()
})
const Joi = require("joi");

exports.createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    description: Joi.string().optional(),
    categoryId: Joi.number().integer().required()
})
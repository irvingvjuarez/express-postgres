const Joi = require("joi");

exports.getSingleUserSchema = Joi.object({
    userId: Joi.number().integer()
})

exports.createUserSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().max(8).required()
})

exports.updateUserSchemaBody = Joi.object({
    email: Joi.string().email()
})
const Joi = require("joi");

exports.createUserSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().max(8)
})
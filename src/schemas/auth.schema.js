const Joi = require("joi");

exports.resetPasswordSchema = Joi.object({
    token: Joi.string(),
    newPassword: Joi.string().min(8).max(8)
})
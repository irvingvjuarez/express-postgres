const Joi = require("joi");

const createCategorySchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().uri().required()
})

module.exports = {
    createCategorySchema
}
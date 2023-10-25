const express = require('express');
const CategoryController = require('../../controllers/categories.controller');
const validatorHandler = require('../../middlewares/validator.handler');
const { createCategorySchema } = require('../../schemas/category.schema');

const router = express.Router()

router
    .get('/', CategoryController.getAll)
    .post(
        '/', validatorHandler(createCategorySchema, 'body'),
        CategoryController.create
    )

module.exports = router
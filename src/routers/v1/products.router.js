const express = require('express');
const ProductsController = require('../../controllers/products.controller');
const validatorHandler = require('../../middlewares/validator.handler');
const { createProductSchema } = require('../../schemas/product.schema');

const router = express.Router();

router
    .get('/', ProductsController.getAll)
    .get('/:id', ProductsController.getOne)
    .post(
        '/', validatorHandler(createProductSchema, 'body'),
        ProductsController.create
    )

module.exports = router;
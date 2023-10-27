const express = require('express');
const ProductsController = require('../../controllers/products.controller');
const validatorHandler = require('../../middlewares/validator.handler');
const { createProductSchema, updateProductSchema } = require('../../schemas/product.schema');

const router = express.Router();

router
    .get('/', ProductsController.getAll)
    .get('/:id', ProductsController.getOne)
    .post(
        '/', validatorHandler(createProductSchema, 'body'),
        ProductsController.create
    )
    .put(
        '/:id', validatorHandler(updateProductSchema, 'body'),
        ProductsController.update
    )

module.exports = router;
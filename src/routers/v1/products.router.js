const express = require('express');
const ProductsController = require('../../controllers/products.controller')

const router = express.Router();

router
    .get('/', ProductsController.getAll)

module.exports = router;
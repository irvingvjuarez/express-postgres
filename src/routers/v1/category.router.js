const express = require('express');
const CategoryController = require('../../controllers/categories.controller')

const router = express.Router()

router
    .get('/', CategoryController.getAll)

module.exports = router
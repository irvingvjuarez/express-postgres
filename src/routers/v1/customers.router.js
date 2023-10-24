const express = require('express');
const CustomerController = require('../../controllers/customers.controller');

const router = express.Router();
router.get('/', CustomerController.getAll)

module.exports = router;
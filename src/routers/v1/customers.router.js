const express = require('express');
const CustomerController = require('../../controllers/customers.controller');
const validatorHandler = require('../../middlewares/validator.handler');
const { createCustomerSchema } = require('../../schemas/customer.schema');
const passport = require('passport');

const router = express.Router();
router
    .get('/', CustomerController.getAll)
    .post(
        '/', validatorHandler(createCustomerSchema, 'body'),
        passport.authenticate('jwt', {session: false}),
        CustomerController.create
    )

module.exports = router;
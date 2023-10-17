const express = require('express');
const UserController = require('../../controllers/users.controller');
const validatorHandler = require('../../middlewares/validator.handler');
const { createUserSchema } = require('../../schemas/user.schema');

const UsersRouter = express.Router()

UsersRouter
    .get('/', UserController.getAll)
    .post(
        '/', validatorHandler(createUserSchema, 'body'),
        UserController.create
    );

module.exports = UsersRouter;

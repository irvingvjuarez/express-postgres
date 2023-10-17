const express = require('express');
const UserController = require('../../controllers/users.controller');
const validatorHandler = require('../../middlewares/validator.handler');
const { createUserSchema, updateUserSchemaBody, getSingleUserSchema } = require('../../schemas/user.schema');

const UsersRouter = express.Router()

UsersRouter
    .get('/', UserController.getAll)
    .get(
        '/:userId', validatorHandler(getSingleUserSchema, 'params'),
        UserController.getOne
    )
    .post(
        '/', validatorHandler(createUserSchema, 'body'),
        UserController.create
    )
    .put(
        '/:userId',
        validatorHandler(getSingleUserSchema, 'params'),
        validatorHandler(updateUserSchemaBody, 'body'),
        UserController.update
    )
    .delete(
        '/:userId',
        validatorHandler(getSingleUserSchema, 'params'),
        UserController.delete
    )

module.exports = UsersRouter;

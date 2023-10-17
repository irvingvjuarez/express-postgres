const express = require('express');
const UserController = require('../../controllers/users.controller');

const UsersRouter = express.Router()

UsersRouter
    .get('/', UserController.getAll)
    .post('/', UserController.create);

module.exports = UsersRouter;

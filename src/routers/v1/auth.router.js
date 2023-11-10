const express = require('express');
const passport = require('passport');
const AuthController = require('../../controllers/auth.controller');
const mailer = require('../../utils/mailer');
const validatorHandler = require('../../middlewares/validator.handler');
const { resetPasswordSchema } = require('../../schemas/auth.schema');

const AuthRouter = express.Router()

AuthRouter
    .post(
        '/login',
        passport.authenticate('local', {session: false}),
        AuthController.login
    )
    .post(
        '/password-recovery',
        AuthController.passwordRecovery
    )
    .post(
        '/reset-password',
        validatorHandler(resetPasswordSchema, 'body'),
        AuthController.resetPassword
    )

module.exports = AuthRouter;
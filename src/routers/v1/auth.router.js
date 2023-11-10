const express = require('express');
const passport = require('passport');
const AuthController = require('../../controllers/auth.controller');
const mailer = require('../../utils/mailer');

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

module.exports = AuthRouter;
const express = require('express');
const passport = require('passport');
const signToken = require('../../utils/auth/token-sign');
const config = require('../../config')

const AuthRouter = express.Router()

AuthRouter.post(
    '/login',
    passport.authenticate('local', {session: false}),
    (req, res) => {
        const payload = {...req.user.dataValues, sub: req.user.id}
        const token = signToken(payload, config.tokenSecret);
        res.json({success: true, token})
    }
);

module.exports = AuthRouter;
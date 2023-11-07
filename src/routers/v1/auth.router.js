const express = require('express');
const passport = require('passport');

const AuthRouter = express.Router()

AuthRouter.post(
    '/login',
    passport.authenticate('local', {session: false}),
    (req, res) => {
        res.json({success: true,  data: req.user})
    }
);

module.exports = AuthRouter;
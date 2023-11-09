const express = require('express');
const passport = require('passport');
const ProfileController = require('../../controllers/profile.controller');

const ProfileRouter = express.Router();

ProfileRouter.get(
    '/orders',
    passport.authenticate('jwt', {session: false}),
    ProfileController.getOrders
)

module.exports = ProfileRouter;
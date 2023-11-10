const boom = require("@hapi/boom");
const config = require("../config");
const UserService = require("../services/user.service");
const signToken = require("../utils/auth/token-sign");
const mailer = require("../utils/mailer");

const userService = new UserService();

exports.login = async function(req, res, next) {
    try {
        const payload = {...req.user.dataValues, sub: req.user.id}
        const token = signToken(payload, config.tokenSecret);
        res.json({success: true, token})
    } catch(error) {
        res.json({success: false, error});
    }
}

exports.passwordRecovery = async function(req, res, next) {
    try {
        const {body: {email}} = req
        await userService.findBy({ email });
        await mailer(email, 'Password recovery', 'Your password is...', `Your password is: `);

        res.json({ success: true, message: 'Mail sent' })
    } catch(error) {
        console.log(error)

        if (error.isBoom) next(error);
        res.json({ success: false, error })
    }
}
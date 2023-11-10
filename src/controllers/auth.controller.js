const boom = require("@hapi/boom");
const config = require("../config");
const UserService = require("../services/user.service");
const signToken = require("../utils/auth/token-sign");
const mailer = require("../utils/mailer");
const verifyToken = require("../utils/auth/token-verify");
const { hash } = require("bcrypt");

const userService = new UserService();

exports.login = async function(req, res, next) {
    try {
        const payload = {...req.user.dataValues, sub: req.user.id}
        const token = signToken(payload, config.tokenSecret, {
            expiresIn: '7d'
        });
        res.json({success: true, token})
    } catch(error) {
        res.json({success: false, error});
    }
}

exports.resetPassword = async function(req, res, next) {
    try {
        const { token, newPassword } = req.body
        const payload = verifyToken(token, config.tokenSecret);
        const user = await userService.findBy({id: payload.sub});
        const encryptedPassword = await hash(newPassword, 10);

        await user.update('password', encryptedPassword);
        res.json({success: true, data: {}})
    } catch(error) {
        res.json({success: false, error})
    }
}

exports.passwordRecovery = async function(req, res, next) {
    try {
        const {body: {email}} = req
        const user = await userService.findBy({ email });
        const token = signToken({sub: user.id}, config.tokenSecret, {
            expiresIn: '15min'
        });
        const recoveryLink = `http://frontend.com/recovery?token=${token}`

        await mailer(
            email,
            'Password recovery',
            `Your password recovery link is ${recoveryLink}`,
            `Your password recovery link is ${recoveryLink}`
        );

        res.json({ success: true, message: 'Mail sent', token })
    } catch(error) {
        console.log(error)

        if (error.isBoom) next(error);
        res.json({ success: false, error })
    }
}
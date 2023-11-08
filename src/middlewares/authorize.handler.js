const boom = require("@hapi/boom");
const config = require("../config");

function authorizeHandler(req, res, next) {
    if (req.headers['api'] === config.apiKey) {
        next()
    } else {
        next(boom.unauthorized())
    }
}

function roleAuthorizationHandler(req, res, next) {
    if (req.user.role === 'admin') {
        next();
    } else {
        throw boom.forbidden('Do not have permissions to perform this action');
    }
}

module.exports = {
    authorizeHandler,
    roleAuthorizationHandler
};
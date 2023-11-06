const boom = require("@hapi/boom");
const config = require("../config");

function authorizeHandler(req, res, next) {
    if (req.headers['api'] === config.apiKey) {
        next()
    } else {
        next(boom.unauthorized())
    }
}

module.exports = authorizeHandler;
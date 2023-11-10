const { sign } = require("jsonwebtoken");

// const secret = config.tokenSecret;
// const payload = {
//     sub: 1,
//     role: 'customer'
// }

function signToken(payload, secret, options) {
    return sign(payload, secret, options);
}

module.exports = signToken;
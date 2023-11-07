const { sign } = require("jsonwebtoken");

// const secret = config.tokenSecret;
// const payload = {
//     sub: 1,
//     role: 'customer'
// }

function signToken(payload, secret) {
    return sign(payload, secret, {
        expiresIn: '7d'
    });
}

module.exports = signToken;
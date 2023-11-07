const { verify } = require("jsonwebtoken");

function verifyToken(token, secret) {
    return verify(token, secret);
}

module.exports = verifyToken;
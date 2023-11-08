const { ExtractJwt, Strategy } = require("passport-jwt");
const config = require("../../../config");
const boom = require("@hapi/boom");

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.tokenSecret
}

function callback(payload, done) {
    return done(null, payload);
}

const JwtStrategy = new Strategy(options, callback);

module.exports = JwtStrategy
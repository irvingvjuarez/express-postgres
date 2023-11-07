const { Strategy } = require("passport-local");
const UserService = require("../../../services/user.service");
const { compare } = require("bcrypt");
const boom = require("@hapi/boom");

const service = new UserService()

async function strategyCallback(email, password, done) {
    try {
        const user = await service.findBy({ email });
        const isMismatch = !await compare(password, user.password);

        if (isMismatch) throw boom.unauthorized();
        done(null, user);
    } catch(error) {
        done(error, false);
    }
}

const LocalStrategy = new Strategy(strategyCallback);

module.exports = LocalStrategy;
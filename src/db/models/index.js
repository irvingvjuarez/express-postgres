const { Customer, CustomerSchema } = require('./customers.model');
const { User, UserSchema } = require('./users.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
}

module.exports = setupModels;
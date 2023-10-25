const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customers.model');
const { Product, ProductSchema } = require('./product.model');
const { User, UserSchema } = require('./users.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));

    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
}

module.exports = setupModels;
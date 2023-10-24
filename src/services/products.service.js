const { models } = require('../libs/sequelize');

class ProductsService {
    async getAll() {
        const response = await models.Products.findAll();
        return response;
    }
}

module.exports = ProductsService;
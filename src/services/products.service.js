const { models } = require('../libs/sequelize');

class ProductsService {
    async getAll() {
        const response = await models.Product.findAll();
        return response;
    }

    async getOne(id) {
        const response = await models.Product.findByPk(id)
        return response;
    }

    async create(data) {
        const response = await models.Product.create(data);
        return response;
    }
}

module.exports = ProductsService;
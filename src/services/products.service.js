const { models } = require('../libs/sequelize');

class ProductsService {
    async getAll() {
        const response = await models.Product.findAll({
            include: ['category']
        });
        return response;
    }

    async getOne(id) {
        const response = await models.Product.findByPk(id, {
            include: ['category']
        })
        return response;
    }

    async create(data) {
        const response = await models.Product.create(data);
        return response;
    }

    async update(id, data) {
        const currentProduct = await models.Product.findByPk(id);
        const response = currentProduct.update(data)
        return response;
    }
}

module.exports = ProductsService;
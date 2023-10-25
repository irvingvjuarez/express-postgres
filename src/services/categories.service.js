const { models } = require('../libs/sequelize')

class CategoriesService {
    async getAll() {
        const response = await models.Category.findAll();
        return response;
    }

    async create(data) {
        const response = await models.Category.create(data);
        return response;
    }
}

module.exports = CategoriesService;
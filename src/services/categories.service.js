const { models } = require('../libs/sequelize')

class CategoriesService {
    async getAll() {
        const response = await models.Categories.findAll();
        return response;
    }
}

module.exports = CategoriesService;
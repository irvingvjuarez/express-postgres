const { models } = require('../libs/sequelize')

class CategoriesService {
    async getAll() {
        const response = await models.Category.findAll();
        return response;
    }

    async getOne(id) {
        const response = await models.Category.findByPk(id, {
            include: ['products']
        });
        return response;
    }

    async create(data) {
        const response = await models.Category.create(data);
        return response;
    }
}

module.exports = CategoriesService;
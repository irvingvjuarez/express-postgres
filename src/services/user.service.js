const { models } = require('../libs/sequelize');

class UserService {
    async getAll() {
        const response = await models.User.findAll();
        return response;
    }

    async getOne(id) {
        const response = await models.User.findByPK(id);
        return response;
    }

    async create(data) {
        const response = await models.User.create(data);
        return response;
    }

    async update(id, data) {
        const currentRecord = await this.getOne(id);
        const response = await currentRecord.update(data);
        return response;
    }

    async delete(id) {
        const currentRecord = await this.getOne(id);
        await currentRecord.destroy();
        return { deteled: true, id }
    }
}

module.exports = UserService;
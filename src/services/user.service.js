const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
    async getAll() {
        const response = await models.User.findAll();
        return response;
    }

    async getOne(id) {
        const user = await models.User.findByPk(id);
        if (!user) throw boom.notFound('User not found')
        return user;
    }

    async create(data) {
        const newUser = await models.User.create(data);
        return newUser;
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
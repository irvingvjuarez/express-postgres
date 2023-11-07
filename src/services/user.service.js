const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class UserService {
    async getAll() {
        const response = await models.User.findAll({
            include: ['customer']
        });
        return response;
    }

    async getOne(id) {
        const user = await models.User.findByPk(id);
        if (!user) throw boom.notFound('User not found')
        return user;
    }

    async findBy(query) {
        const user = await models.User.findOne({
            where: query
        });
        if (!user) throw boom.unauthorized();
        return user;
    }

    async create(data) {
        data.password = await bcrypt.hash(data.password, 10);
        const createdUser = await models.User.create(data);
        const { dataValues: { password, ...newUser } } = createdUser;

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
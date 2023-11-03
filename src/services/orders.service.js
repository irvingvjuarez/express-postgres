const { models } = require('../libs/sequelize')

class OrdersService {
    async getAll() {
        const response = await models.Order.findAll();
        return response;
    }

    async getOne(id) {
        const response = await models.Order.findByPk(id, {
            include: [{
                association: 'customer',
                include: ['user']
            }, 'items']
        });
        return response;
    }

    async addItem(data) {
        const response = await models.OrderProduct.create(data);
        return response;
    }

    async create(data) {
        const response = await models.Order.create(data);
        return response;
    }
}

module.exports = OrdersService
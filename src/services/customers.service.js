const { models } = require('../libs/sequelize')

class CustomerService {
    async getAll() {
        const response = await models.Customer.findAll({
            include: ['user']
        });
        return response;
    }

    async create(data) {
        const response = await models.Customer.create(data);
        return response;
    }
}

module.exports = CustomerService;
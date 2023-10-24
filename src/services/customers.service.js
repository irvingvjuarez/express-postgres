const { models } = require('../libs/sequelize')

class CustomerService {
    async getAll() {
        const response = await models.Customer.findAll();
        return response;
    }
}

module.exports = CustomerService;
const { models } = require('../libs/sequelize');

class ProfileService {
    async getOrders(userId) {
        const response = await models.Order.findAll({
            where: {
                '$customer.user.id$': userId
            },
            include: [
                {
                    association: 'customer',
                    include: ['user']
                }
            ]
        })
        return response;
    }
}

module.exports = ProfileService;

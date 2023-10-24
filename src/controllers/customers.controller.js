const UserService = require('../services/customers.service');

const service = new UserService();

async function getAll(_req, res) {
    try {
        const customers = await service.getAll();
        res.json({ success: true, data: customers });
    } catch(error) {
        res.json({ success: false, message: error.message });
    }
}

module.exports = {
    getAll
}
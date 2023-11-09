const CustomerService = require('../services/customers.service');

const service = new CustomerService();

async function getAll(_req, res) {
    try {
        const customers = await service.getAll();
        res.json({ success: true, data: customers });
    } catch(error) {
        res.json({ success: false, message: error.message });
    }
}

async function create(req, res, next) {
    try {
        if (!req.body.userId) req.body.userId = req.user.sub;
        const newUser = await service.create(req.body);
        res.json({ success: true, data: newUser });
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getAll,
    create
}
const UserService = require('../services/user.service');
const service = new UserService();

async function getAll(req, res) {
    try {
        const response = await service.getAll();
        res.json({ success: true, data: response });
    } catch(error) {
        res.status(404).send({ success: false, message: error.message })
    }
}

async function create(req, res) {
    try {
        const response = await service.create(req.body);
        res.json({ success: true, data: response });
    } catch(error) {
        res.status(500).send({ success: false, message: error.message })
    }
}

module.exports = {
    getAll,
    create
}
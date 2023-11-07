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

async function update(req, res) {
    try {
        const response = await service.update(req.params.userId, req.body);
        res.json({ success: true, data: response });
    } catch(error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

async function getOne(req, res) {
    try {
        const response = await service.getOne(req.params.userId);
        delete response.dataValues.password;

        res.json({ success: true, data: response });
    } catch(error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

async function destroy(req, res) {
    try {
        const response = await service.delete(req.params.userId);
        res.json({ success: true, data: response });
    } catch(error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = {
    getAll,
    create,
    update,
    getOne,
    delete: destroy
}
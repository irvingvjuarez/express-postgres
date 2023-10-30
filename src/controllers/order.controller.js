const OrdersService = require("../services/orders.service");

const service = new OrdersService();

exports.getAll = async function(req, res) {
    try {
        const orders = await service.getAll();
        res.json({ success: true, data: orders });
    } catch (error) {
        res.json({ success: false, error });
    }
}

exports.getOne = async function(req, res, next) {
    try {
        const order = await service.getOne(req.params.id);
        res.json({ success: true, data: order });
    } catch(error) {
        next(error);
    }
}

exports.create = async function(req, res, next) {
    try {
        const newOrder = await service.create(req.body);
        res.json({ success: true, data: newOrder });
    } catch (error) {
        next(error);
    }
}
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

exports.getAll = async function(req, res) {
    try {
        const categories = await service.getAll();
        res.json({ success: true, data: categories });
    } catch(error) {
        res.json({ success: false, error });
    }
}

exports.create = async function(req, res, next) {
    try {
        const newCategory = await service.create(req.body);
        res.json({ success: true, data: newCategory });
    } catch(error) {
        next(error);
    }
}
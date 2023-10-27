const ProductsService = require('../services/products.service');
const service = new ProductsService();

exports.getAll = async function(req, res, next) {
    try {
        const products = await service.getAll();
        res.json({ success: true, data: products });
    } catch(error) {
        res.json({ success: false, error })
    }
}

exports.create = async function(req, res, next) {
    try {
        const newProduct = await service.create(req.body);
        res.json({ success: true, data: newProduct });
    } catch(error) {
        next(error)
    }
}
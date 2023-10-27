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

exports.getOne = async function(req, res) {
    try {
        const user = await service.getOne(req.params.id);
        res.json({ success: true, data: user })
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

exports.update = async function(req, res, next) {
    const { id } = req.params

    try {
        const updatedProduct = await service.update(id, req.body);
        res.json({ success: true, data: updatedProduct })
    } catch(error) {
        next(error);
    }
}
const ProductsService = require('../services/products.service');
const service = new ProductsService();

exports.getAll = async function(req, res) {
    try {
        const products = await service.getAll();
        res.json({ success: true, data: products });
    } catch(error) {
        res.json({ success: false, error })
    }
}
const ProfileService = require("../services/profile.service");

const service = new ProfileService();

exports.getOrders = async (req, res) => {
    try {
        const orders = await service.getOrders(req.user.sub)
        res.json({success: true, data: orders})
    } catch(error) {
        res.json({ success: false, error })
    }
}
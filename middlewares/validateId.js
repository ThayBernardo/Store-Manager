const productModel = require('../models/productModel');

const validateId = {
  id: async (req, res, next) => {
    const { id } = req.params;
    const data = await productModel.getAll();
    const validate = data.filter((all) => Number(all.id) === Number(id));
    if (validate.length === 0) return res.status(404).json({ message: 'Product not found' });
    next();
  },
};

module.exports = validateId;
const productService = require('../services/productService');

const productController = {
  getAll: async (_req, res) => {
    const data = await productService.getAll();
    console.log(data);
    res.status(200).json(data);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const data = await productService.getById(id);
    if (!data) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(data);
  },

  create: async (req, res) => {
    const { name } = req.body;
    const data = await productService.create(name);
    res.status(201).json(data);
  },

  getAllSales: async (_req, res) => {
    const data = await productService.getAllSales();
    res.status(200).json(data);
  },

  getByIdSales: async (req, res) => {
    const { id } = req.params;
    const data = await productService.getByIdSales(id);
    if (data.length === 0) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(data);
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = await productService.updateProduct(id, name);
    if (!data) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ id, ...data });
  },
};

module.exports = productController;
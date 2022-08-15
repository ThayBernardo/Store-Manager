const productService = require('../services/productService');

const saleController = {
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

  registerSale: async (req, res) => {
    const { quantity } = req.body;
    const data = await productService.registerSale(quantity);
    res.status(201).json(data);
  },

  deleteSale: async (req, res) => {
    const { id } = req.params;
    await productService.deleteSale(id);
    res.status(204).send();
  },

  updateSale: async (req, res) => {
    const { id } = req.params;
    const { productId, quantity } = req.body;
    const data = await productService.updateSale(id, productId, quantity);
    res.status(200).json(data);
  },

};

module.exports = saleController;
const saleService = require('../services/saleService');

const saleController = {
  getAllSales: async (_req, res) => {
    const data = await saleService.getAllSales();
    res.status(200).json(data);
  },

  getByIdSales: async (req, res) => {
    const { id } = req.params;
    const data = await saleService.getByIdSales(id);
    if (data.length === 0) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(data);
  },

  deleteSale: async (req, res) => {
    const { id } = req.params;
    await saleService.deleteSale(id);
    res.status(204).send();
  },
};

module.exports = saleController;
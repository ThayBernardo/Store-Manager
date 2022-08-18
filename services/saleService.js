const saleModel = require('../models/SaleModel');

const saleService = {
  getAllSales: async () => {
    const data = await saleModel.getAllSales();
    return data;
  },

  getByIdSales: async (id) => {
    const data = await saleModel.getByIdSales(id);
    return data;
  },

  deleteSale: async (id) => {
    await saleModel.deleteSale(id);
  },
};

module.exports = saleService;
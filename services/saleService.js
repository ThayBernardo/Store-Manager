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

  registerSale: async (quantity) => {
    const data = await saleModel.registerSale(quantity);
    return data;
  },

  deleteSale: async (id) => {
    await saleModel.deleteSale(id);
  },

  updateSale: async (id, productId, quantity) => {
    const data = await saleModel.updateSale(id, productId, quantity);
    return data;
  },
};

module.exports = saleService;
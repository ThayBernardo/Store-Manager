const productModel = require('../models/productModel');

const productService = {
  getAll: async () => {
    const data = await productModel.getAll();
    return data;
  },

  getById: async (id) => {
    const data = await productModel.getById(id);
    return data;
  },

  create: async (name) => {
    const data = await productModel.create(name);
    return data;
  },

  getAllSales: async () => {
    const data = await productModel.getAllSales();
    return data;
  },

  getByIdSales: async (id) => {
    const data = await productModel.getByIdSales(id);
    return data;
  },

  updateProduct: async (id, name) => {
    const data = await productModel.updateProduct(id, name);
    return data;
  },
};

module.exports = productService;
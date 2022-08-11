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
};

module.exports = productService;
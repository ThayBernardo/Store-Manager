const connection = require('./connection');

const productModel = {
  getAll: async () => {
    const [result] = await connection.query('SELECT * FROM StoreManager.products');
    return result;
  },

  getById: async (id) => {
    const [[result]] = await connection.query(`SELECT * FROM 
    StoreManager.products WHERE id = ?`, [id]);
    return result;
  },

  create: async (name) => {
    const [{ insertId }] = await connection.query(`INSERT INTO 
    StoreManager.products (name) VALUES (?)`, [name]);
    return { id: insertId, name };
  },
};

module.exports = productModel;
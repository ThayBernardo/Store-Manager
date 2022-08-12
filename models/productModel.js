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

  getAllSales: async () => {
    const [result] = await connection.query(`SELECT sale_id AS saleId,
    product_id AS productId,
    quantity,
    date
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    ORDER BY saleId ASC, productId ASC;`);
    return result;
  },

  getByIdSales: async (id) => {
    const [result] = await connection.query(`SELECT product_id AS productId,
    quantity, date
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE StoreManager.sales.id = ?
    ORDER BY sale_id ASC, product_id ASC`, [id]);
    return result;
  },

  updateProduct: async (id, name) => {
    await connection.query(`UPDATE StoreManager.products
    SET name = ? WHERE id = ?`, [name, id]);
    return { name };
  },

  deleteProduct: async (id) => {
    await connection.query(`DELETE FROM StoreManager.products
    WHERE id = ?`, [id]);
  },

  registerSale: async (quantity) => {
    const [{ insertId }] = await connection.query(`INSERT INTO StoreManager.sales
    (date) VALUES (now())`);
    const [result] = await connection.query(`INSERT INTO StorageManager.sales_products
    (sale_id, quantity) VALUES (?, ?)`, [insertId, quantity]);
    console.log(result.id);
    return result.id;
  },

  deleteSale: async (id) => {
    await connection.query(`DELETE FROM StoreManager.sales
    WHERE id = ?`, [id]);
  },
};

module.exports = productModel;  
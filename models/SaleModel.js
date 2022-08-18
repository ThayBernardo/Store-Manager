const connection = require('./connection');

const saleModel = {
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

  deleteSale: async (id) => {
    await connection.query(`DELETE FROM StoreManager.sales
    WHERE id = ?`, [id]);
  },
};

module.exports = saleModel;
const { Router } = require('express');
const saleController = require('../controllers/saleController');
const validateId = require('../middlewares/validateId');

const route = Router();

route.get('/', saleController.getAllSales);
route.get('/:id', saleController.getByIdSales);
route.delete('/:id', validateId.idSale, saleController.deleteSale);

module.exports = route;
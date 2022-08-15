const { Router } = require('express');
const saleController = require('../controllers/saleController');
const validateId = require('../middlewares/validateId');
const validateSale = require('../middlewares/validateUpdateSale');

const route = Router();

route.get('/', saleController.getAllSales);
route.get('/:id', saleController.getByIdSales);
route.delete('/:id', validateId.idSale, saleController.deleteSale);
route.put('/:id', validateSale.validateBody, saleController.updateSale);

module.exports = route;
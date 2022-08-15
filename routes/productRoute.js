const { Router } = require('express');
const productController = require('../controllers/productController');
const validate = require('../middlewares/validateCreateProduct');
const validateId = require('../middlewares/validateId');

const route = Router();

route.get('/', productController.getAll);
route.get('/:id', productController.getById);
route.post('/', validate.validateBody, productController.create);
route.put('/:id', validate.validateBody, validateId.id, productController.updateProduct);
route.delete('/:id', validateId.id, productController.deleteProduct);

module.exports = route;
const express = require('express');
const productController = require('./controllers/productController');
const validate = require('./middlewares/validateCreateProduct');
require('express-async-errors');

const app = express();

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
app.post('/products', validate.validateBody, productController.create);
app.get('/sales', productController.getAllSales);
app.get('/sales/:id', productController.getByIdSales);

app.use((err, _req, res, _next) => {
  res.status(err.code).json({ message: err.message });
});

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
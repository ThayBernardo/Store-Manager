const express = require('express');
const productRoute = require('./routes/productRoute');
const saleRoute = require('./routes/saleRoute');
const Error = require('./middlewares/error');
require('express-async-errors');

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use('/sales', saleRoute);

app.use(Error.err);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
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

module.exports = app;
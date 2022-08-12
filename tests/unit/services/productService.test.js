const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('ProductService', () => {
  beforeEach(sinon.restore);

  const fakeData = [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ];

  it('Pegar todos produtos', async () => {
    sinon.stub(productModel, 'getAll').resolves(fakeData);

    const all = await productService.getAll();
    expect(all).have.lengthOf(3);
  });

  it('Pegar produto pelo id', async () => {
    sinon.stub(productModel, 'getById').resolves(2);

    const id = await productService.getById();
    expect(id).to.be.equal(2);
  });

  it('Criar produto', async () => {
    const product = { "id": "2", "name": "Barbie"}

    sinon.stub(productModel, 'create').resolves(product);

    const createProduct = await productService.create();
    expect(createProduct).to.have.all.keys('id', 'name');
  });
  describe('Sales', () => {
    const fakeDataSales = [
      {
        "saleId": 1,
        "productId": 1,
        "quantity": 5,
        "date": "2022-08-12T14:41:44.000Z"
      },
      {
        "saleId": 1,
        "productId": 2,
        "quantity": 10,
        "date": "2022-08-12T14:41:44.000Z"
      },
      {
        "saleId": 2,
        "productId": 3,
        "quantity": 15,
        "date": "2022-08-12T14:41:44.000Z"
      }
    ]
    it('Pegar produto pelo sales id', async () => {
      sinon.stub(productModel, 'getByIdSales').resolves(2);

      const id = await productService.getByIdSales();
      expect(id).to.be.equal(2);
    });
    it('Listagem de todos produtos', async () => {
      sinon.stub(productModel, 'getAllSales').resolves(fakeDataSales);

      const all = await productService.getAllSales();
      expect(all).have.lengthOf(3);
    });
  });
});
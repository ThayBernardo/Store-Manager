const sinon = require('sinon');
const { expect } = require('chai');
const saleModel = require('../../../models/SaleModel');
const saleService = require('../../../services/saleService');

describe('Sales', () => {
  beforeEach(sinon.restore);

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
    sinon.stub(saleModel, 'getByIdSales').resolves(2);

    const id = await saleService.getByIdSales();
    expect(id).to.be.equal(2);
  });
  it('Listagem de todas vendas', async () => {
    sinon.stub(saleModel, 'getAllSales').resolves(fakeDataSales);

    const all = await saleService.getAllSales();
    expect(all).have.lengthOf(3);
  });
});

const sinon = require('sinon');
const { expect } = require('chai');
const saleService = require('../../../services/saleService');
const saleController = require('../../../controllers/saleController');

describe('Sales', () => {
  beforeEach(sinon.restore);

  const fakeDataSales = [
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

  it('Retorna todos produtos com status 200 e produtos', async () => {
    sinon.stub(saleService, 'getAllSales').resolves(fakeDataSales);

    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await saleController.getAllSales(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(fakeDataSales)).to.be.equal(true);
  });
});
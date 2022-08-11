const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../services/productService');
const productController = require('../../../controllers/productController');

describe('ProductController', () => {
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

  it('Retorna todos produtos com status 200 e produtos', async () => {
    sinon.stub(productModel, 'getAll').resolves(fakeData);
    
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(fakeData)).to.be.equal(true);
  });

  // it('Retorna produtos com seu respectivo id, status 200 e produto', async () => {
  //   const fakeDataId = {
  //     "name": "Traje de encolhimento"
  //   };
    
  //   sinon.stub(productModel, 'getById').resolves(fakeDataId);
  //   sinon.stub(productModel, 'getById').resolves(2);

  //   const req = {};
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   await productController.getById(req, res);
  //   expect(res.status.calledWith(200)).to.be.equal(true);
  //   expect(res.json.calledWith(fakeDataId)).to.be.equal(true);
  // });
  //Teste
});
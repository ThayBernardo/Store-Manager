const sinon = require('sinon');
const { expect } = require('chai');
const productService = require('../../../services/productService');
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
    sinon.stub(productService, 'getAll').resolves(fakeData);
    
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productController.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(fakeData)).to.be.equal(true);
  });

  it('Retorna produtos com seu respectivo id, status 200 e produto', async () => {
    const fakeDataId = 
      {
        "id": 1,
        "name": "Martelo de Thor"
      }

    const req = {};
    const res = {};

    req.params = { id: 1 }
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'getById').resolves(fakeDataId);

    await productController.getById(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(fakeDataId)).to.be.equal(true);
  });

  it('Criação se tudo der certo, status 201 e nome do produto', async () => {
    const newProduct = { 'name': 'Barbie' };

    const req = {};
    const res = {};

    req.params = { id: 2 }
    req.body = { 'name': 'Barbie' };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'create').resolves(newProduct);

    await productController.create(req, res);
    expect(res.status.calledWith(201)).to.be.equal(true);
    expect(res.json.calledWith(newProduct)).to.be.equal(true);
  });

  it('Atualizar, se tudo der certo, status 200, id e nome', async () => {
    const updateProduct = { 'id': 2, 'name': 'Barbie' };

    const req = {};
    const res = {};

    req.params = { id: 2 }
    req.body = { 'name': 'Barbie' };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, 'updateProduct').resolves(updateProduct);

    await productController.updateProduct(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(updateProduct)).to.be.equal(true);
  });

  it('Ao deletar retorna status 204', async () => {
    const item = { 'id': 2 }

    const req = {};
    const res = {};

    req.params = { id: 2 }
    res.status = sinon.stub().returns(res);
    res.send = sinon.stub().returns();

    sinon.stub(productService, 'deleteProduct').resolves(item);

    await productController.deleteProduct(req, res);
    expect(res.status.calledWith(204)).to.be.equal(true);
    expect(res.send.calledWith()).to.be.equal(true);
  });
});
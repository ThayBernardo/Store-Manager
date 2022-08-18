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

  it('Atualizar produto', async () => {
    const product = { 'id': 2, 'name': 'Barbie' };
    sinon.stub(productModel, 'updateProduct').resolves(product);

    const update = await productService.updateProduct();
    expect(update.name).to.be.equal('Barbie');
  });

  it('Deletar produto', async () => {
    sinon.stub(productModel, 'deleteProduct').resolves();
    await productService.deleteProduct();
  });
});
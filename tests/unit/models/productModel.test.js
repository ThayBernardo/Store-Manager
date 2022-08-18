const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../models/productModel');
const connection = require('../../../models/connection');

describe('Listagem de produtos', () => {
  beforeEach(sinon.restore);

  describe('Todos os produtos', () => {
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

    it('Todos produtos são retornados', async () => {

      sinon.stub(connection, 'query').resolves([fakeData]);

      const products = await productModel.getAll();
      expect(products).have.lengthOf(3);
    
    });
  });

  describe('Produto por id', () => {
    const fakeDataId = {
      "id": 2,
      "name": "Traje de encolhimento"
    };

    it('Se possui as chaves id e name', async () => {
      sinon.stub(connection, 'query').resolves([[ fakeDataId ]]);

      const products = await productModel.getById();
      expect(products).to.be.all.keys('id', 'name');
    });
  });
  describe('Criando produtos', () => {
    const fakeDataId = {
      "id": 2,
      "name": "Traje de encolhimento"
    };

    it('Adiciona novo produto', async () => {
      sinon.stub(connection, 'query').resolves([[fakeDataId]]);

      const product = await productModel.create();
      expect(product).to.be.all.keys('id', 'name');
    });
  });
  describe('Update', () => {
    it('Retorna produto editado', async () => {
      sinon.stub(connection, 'query').resolves();
      const product = await productModel.updateProduct(
        2,
        'Barbie');

      expect(product).to.be.a('object');
      expect(product).to.have.all.keys('name');
      expect(product.name).to.be.equal('Barbie');
    });
  });

  describe('Deleta', () => {
    it('Retorna id do produto deletado', async () => {
      sinon.stub(connection, 'query').resolves();
      await productModel.deleteProduct(2);
    });
  });
});
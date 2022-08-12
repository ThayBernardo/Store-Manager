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
    ];
    it('Listagem de todos produtos', async () => {
      sinon.stub(connection, 'query').resolves(fakeDataSales);

      const products = await productModel.getAllSales();
      expect(products).to.have.all.keys('saleId', 'productId', 'quantity', 'date');
    });
  });
});
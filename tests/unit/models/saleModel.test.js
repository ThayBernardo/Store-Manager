const sinon = require('sinon');
const { expect } = require('chai');
const saleModel = require('../../../models/SaleModel');
const connection = require('../../../models/connection');

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
  ];
  it('Listagem de todos produtos', async () => {
    sinon.stub(connection, 'query').resolves(fakeDataSales);

    const products = await saleModel.getAllSales();
    expect(products).to.have.all.keys('saleId', 'productId', 'quantity', 'date');
  });
});
describe('Sale por id', () => {
  const fakeDataId = [
    {
      "productId": 3,
      "quantity": 5,
      "date": "2022-08-15T17:40:39.000Z"
    }
  ];

  it('Se possui as chaves id e name', async () => {
    sinon.stub(connection, 'query').resolves(fakeDataId);

    const products = await saleModel.getByIdSales();
    expect(products).to.be.all.keys('productId', 'quantity', 'date');
  });
});
  // describe('Update product', () => {
  //   const fakeDataUpdate =
  //   {
  //     id: 4,
  //     name: "Teste"
  //   }

  //   sinon.stub(connection, 'query').resolves();

  //   it('Se atualiza corretamente', async () => {
  //     const product = await saleModel.updateProduct(fakeDataUpdate);
  //     expect(product).to.be.all.keys('id', 'name');
  //     expect(product.id).to.be.equal(4);
  //     expect(product.name).to.be.equal('Teste');
  //   });
  // });

  // describe('Excluir sale', () => {
  //   sinon.stub(connection, 'query').resolves();

  //   it('Se retorna id do sale deletado', async () => {
  //     const id = await saleModel.deleteProduct(2);
  //     expect(id).to.be.equal(2);
  //   });
  // });
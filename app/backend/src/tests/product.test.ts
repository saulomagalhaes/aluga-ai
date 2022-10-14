import chai from 'chai'
import chaiHttp from 'chai-http'
import * as sinon from 'sinon'
import app from '../app'
import Product from '../database/models/Product'
import { productMock, productsMock } from './mocks/productMock'
chai.use(chaiHttp)

describe('/', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('getAllProducts', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findAll').resolves(productsMock as Product[])
    })

    it('should return 200 and products', async () => {
      const response = await chai.request(app).get('/')
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.an('array')
    })
  })

  describe('getProductById', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findByPk').resolves(productMock as Product)
    })

    it('should return 200 and product', async () => {
      const response = await chai.request(app).get('/product/1')
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.have.property('price')
    })
  })

  describe('getProductsByName', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findAll').resolves(productsMock as Product[])
    })

    it('should return 200 and products', async () => {
      const response = await chai.request(app).get('/product?name=iphone')
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.an('array')
    })
  })

  describe('getProductsByPrice', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findAll').resolves(productsMock as Product[])
    })

    it('should return 200 and products', async () => {
      const response = await chai.request(app).get('/product?price=DESC')
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.an('array')
    })
  })

  describe('getProductsByAlphabet', () => {
    beforeEach(() => {
      sinon.stub(Product, 'findAll').resolves(productsMock as Product[])
    })

    it('should return 200 and products', async () => {
      const response = await chai.request(app).get('/product?alphabet=ASC')
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.an('array')
    })
  })
})

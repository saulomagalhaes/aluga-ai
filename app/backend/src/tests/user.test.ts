import chai from 'chai'
import chaiHttp from 'chai-http'
import * as sinon from 'sinon'
import app from '../app'
import User from '../database/models/User'
import { JwtService } from '../services/jwtService'
import { PasswordService } from '../services/passwordService'
import { bodyLogin, bodyRegister, token, userMock } from './mocks/userMock'
chai.use(chaiHttp)

describe('/login', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('login', () => {
    beforeEach(() => {
      sinon.stub(User, 'findOne').resolves(userMock as User)
      sinon.stub(JwtService, 'sign').returns(token)
    })

    it('should return 200 and token', async () => {
      sinon.stub(PasswordService, 'comparePassword').returns(true)
      const response = await chai.request(app).post('/login').send(bodyLogin)
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.have.property('token')
    })

    it('should return 401 and UnauthorizedError', async () => {
      sinon.stub(PasswordService, 'comparePassword').returns(false)
      const response = await chai.request(app).post('/login').send(bodyLogin)
      chai.expect(response.status).to.equal(401)
      chai.expect(response.body.message).to.equal('Incorrect email or password')
    })
  })

  describe('register', () => {
    beforeEach(() => {
      sinon.stub(User, 'create').resolves(userMock as User)
      sinon.stub(JwtService, 'sign').returns(token)
    })

    it('should return 201 and token', async () => {
      sinon.stub(User, 'findOne').resolves(null)
      sinon.stub(PasswordService, 'hashPassword').returns('hash')
      const response = await chai
        .request(app)
        .post('/register')
        .send(bodyRegister)
      chai.expect(response.status).to.equal(201)
      chai.expect(response.body).to.have.property('token')
    })

    it('should return 409 and ConflictError', async () => {
      sinon.stub(User, 'findOne').resolves(userMock as User)
      const response = await chai
        .request(app)
        .post('/register')
        .send(bodyRegister)
      chai.expect(response.status).to.equal(409)
      chai.expect(response.body.message).to.equal('Email already in use')
    })
  })

  describe('authorization', () => {
    it('should return 200 and user', async () => {
      sinon.stub(JwtService, 'verify').returns('1')
      sinon.stub(User, 'findByPk').resolves(userMock as User)

      const response = await chai
        .request(app)
        .get('/authorization')
        .set('Authorization', token)
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.have.property('id')
    })

    it('should return 401 and UnauthorizedError', async () => {
      sinon.stub(JwtService, 'verify').returns('999999999999999999999')
      sinon.stub(User, 'findByPk').resolves(null)
      const response = await chai
        .request(app)
        .get('/authorization')
        .set('Authorization', token)
      chai.expect(response.status).to.equal(401)
      chai.expect(response.body.message).to.equal('Unauthorized')
    })
  })
})

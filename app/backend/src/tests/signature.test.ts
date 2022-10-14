import chai from 'chai'
import chaiHttp from 'chai-http'
import * as sinon from 'sinon'
import app from '../app'
import Signature from '../database/models/Signature'
import { signaturesMock } from './mocks/signatureMock'
chai.use(chaiHttp)

describe('/signature', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('signatures', () => {
    beforeEach(() => {
      sinon.stub(Signature, 'findAll').resolves(signaturesMock as never)
    })

    it('should return 200 and a customers subscriptions', async () => {
      const response = await chai.request(app).get('/signature/1')
      chai.expect(response.status).to.equal(200)
      chai.expect(response.body).to.an('array')
    })
  })
})

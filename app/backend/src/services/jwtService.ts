import * as jwt from 'jsonwebtoken'

class JwtService {
  static sign = (
    payload: jwt.JwtPayload,
    secret: jwt.Secret,
    options: jwt.SignOptions
  ) => jwt.sign(payload, secret, options)

  static verify = (token: string, secret: jwt.Secret) => {
    jwt.verify(token, secret)
  }
}

export { JwtService }

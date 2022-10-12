import * as jwt from 'jsonwebtoken'
import { ICustomJwtPayload } from '../interfaces/ICustomJwtPayload'

class JwtService {
  static sign = (
    payload: jwt.JwtPayload,
    secret: jwt.Secret,
    options: jwt.SignOptions
  ) => jwt.sign(payload, secret, options)

  static verify = (token: string, secret: jwt.Secret) => {
    const {
      data: { id },
    } = jwt.verify(token, secret) as ICustomJwtPayload
    return id
  }
}

export { JwtService }

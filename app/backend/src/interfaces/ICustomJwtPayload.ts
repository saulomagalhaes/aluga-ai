import { JwtPayload } from 'jsonwebtoken'

interface ICustomJwtPayload extends JwtPayload {
  data: {
    id: string
  }
}

export { ICustomJwtPayload }

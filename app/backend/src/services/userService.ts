import User from '../database/models/User'
import { ThrowError } from '../error/throwError'
import { ILogin, IRegister, IUserService } from '../interfaces/IUserService'
import { JwtService } from './jwtService'
import { PasswordService } from './passwordService'

class UserService implements IUserService {
  public login = async ({ email, password }: ILogin): Promise<string> => {
    const user: User | null = await User.findOne({ where: { email } })

    if (!user) {
      throw new ThrowError('UnauthorizedError', 'Incorrect email or password')
    }

    const isPasswordCorrect = PasswordService.comparePassword(
      password,
      user.password
    )

    if (!isPasswordCorrect) {
      throw new ThrowError('UnauthorizedError', 'Incorrect email or password')
    }

    const { id, name } = user
    const payload = { data: { id, name, email } }
    const options = {
      expiresIn: '7d',
    }

    return JwtService.sign(payload, process.env.JWT_SECRET || '', options)
  }

  public register = async ({
    name,
    email,
    password,
  }: IRegister): Promise<string> => {
    const user: User | null = await User.findOne({ where: { email } })

    if (user) {
      throw new ThrowError('ConflictError', 'Email already in use')
    }

    const hash = PasswordService.hashPassword(password)
    const newUser = await User.create({ name, email, password: hash })

    const { id } = newUser
    const payload = { data: { id, name, email } }
    const options = {
      expiresIn: '7d',
    }

    return JwtService.sign(payload, process.env.JWT_SECRET || '', options)
  }

  public authorization = async (token: string): Promise<string> => {
    const id = JwtService.verify(token, process.env.JWT_SECRET || '')
    const user: User | null = await User.findByPk(id)
    if (!user) {
      throw new ThrowError('UnauthorizedError', 'Unauthorized')
    }
    return id
  }
}

export { UserService }

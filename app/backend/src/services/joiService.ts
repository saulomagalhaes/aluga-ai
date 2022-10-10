import Joi from 'joi'
import { IDataSignature } from '../interfaces/ISignatureService'
import { ILogin, IRegister } from '../interfaces/IUserService'

class JoiService {
  static validateBodyLogin = async (userData: ILogin): Promise<ILogin> => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    const data = await schema.validateAsync(userData)
    return data
  }

  static validateBodyRegister = async (
    userData: IRegister
  ): Promise<IRegister> => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    const data = await schema.validateAsync(userData)
    return data
  }

  static validateDataSignature = async (
    data: IDataSignature
  ): Promise<void> => {
    const schema = Joi.object({
      userId: Joi.number().required(),
      productId: Joi.number().required(),
      file: Joi.string().required(),
    })
    await schema.validateAsync(data)
  }
}

export { JoiService }

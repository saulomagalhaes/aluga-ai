import { Request, Response } from 'express'
import { IUserService } from '../interfaces/IUserService'
import { JoiService } from '../services/joiService'

class UserController {
  constructor(private _userService: IUserService) {}

  public login = async (req: Request, res: Response): Promise<void> => {
    await JoiService.validateBodyLogin(req.body)
    const token = await this._userService.login(req.body)
    res.status(200).json({ token })
  }

  public register = async (req: Request, res: Response): Promise<void> => {
    await JoiService.validateBodyRegister(req.body)
    const token = await this._userService.register(req.body)
    res.status(201).json({ token })
  }

  public authorization = async (req: Request, res: Response): Promise<void> => {
    const token = req.headers.authorization || ''
    const id = await this._userService.authorization(token)
    res.status(200).json({ id })
  }
}

export { UserController }

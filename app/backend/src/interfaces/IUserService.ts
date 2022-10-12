export interface ILogin {
  email: string
  password: string
}

export interface IRegister extends ILogin {
  name: string
}

export interface IUserService {
  login({ email, password }: ILogin): Promise<string>
  register({ name, email, password }: IRegister): Promise<string>
  authorization(token: string): Promise<string>
}

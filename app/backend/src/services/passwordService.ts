import md5 from 'md5'

class PasswordService {
  static comparePassword = (password: string, hash: string): boolean => {
    return md5(password) === hash
  }

  static hashPassword = (password: string): string => {
    return md5(password)
  }
}

export { PasswordService }

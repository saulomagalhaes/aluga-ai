import Signature from '../database/models/Signature'

interface ISignatures {
  name: string
  price: number
}

interface IDataSignature {
  userId: number
  productId: number
  file: string
}

interface ISignatureService {
  signatures(userId: number): Promise<Signature[] | null>
  checkout(userId: number, productId: number, file: string): Promise<void>
}

export { ISignatureService, ISignatures, IDataSignature }

import Product from '../database/models/Product'
import Signature from '../database/models/Signature'
import { ThrowError } from '../error/throwError'
import { ISignatureService } from '../interfaces/ISignatureService'

class SignatureService implements ISignatureService {
  public signatures = async (userId: number): Promise<Signature[] | null> => {
    const signatures = await Signature.findAll({
      where: { userId },
      attributes: ['id', 'createdAt'],
      include: [
        {
          model: Product,
          as: 'product',
          attributes: ['name', 'price', 'img'],
        },
      ],
    })
    return signatures
  }

  public checkout = async (
    userId: number,
    productId: number,
    imgUrl: string
  ): Promise<void> => {
    const product = await Product.findByPk(productId)
    if (!product) {
      throw new ThrowError('NotFound', 'Product not found')
    }
    const localImage = `http://localhost:3001/upload/${imgUrl}`
    const signature = await Signature.create({
      userId,
      productId,
      imgUrl: localImage,
    })
    if (!signature) {
      throw new ThrowError('ConflictError', 'Signature already exists')
    }
  }
}

export { SignatureService }

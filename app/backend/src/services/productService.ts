import { Op } from 'sequelize'
import Product from '../database/models/Product'
import { IProductService } from '../interfaces/IProductService'

class ProductService implements IProductService {
  public getAllProducts = async (): Promise<Product[]> => {
    return await Product.findAll()
  }
  public getProductById(id: number): Promise<Product | null> {
    return Product.findByPk(id)
  }
  public getProductsByName(name: string): Promise<Product[]> {
    const products = Product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    })
    return products
  }

  public getProductsByPrice(order: string): Promise<Product[]> {
    const products = Product.findAll({
      order: [['price', order]],
    })
    return products
  }

  public getProductsByAlphabet(order: string): Promise<Product[]> {
    const products = Product.findAll({
      order: [['name', order]],
    })
    return products
  }
}

export { ProductService }

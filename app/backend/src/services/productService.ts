import Product from '../database/models/Product'
import { IProductService } from '../interfaces/IProductService'

class ProductService implements IProductService {
  public getAllProducts = async (): Promise<Product[]> => {
    return await Product.findAll()
  }
  public getProductById(id: number): Promise<Product | null> {
    return Product.findByPk(id)
  }
}

export { ProductService }

import Product from '../database/models/Product'

interface IProductService {
  getAllProducts(): Promise<Product[]>
  getProductById(id: number): Promise<Product | null>
}

export { IProductService }

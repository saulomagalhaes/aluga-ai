import Product from '../database/models/Product'

interface IProductService {
  getAllProducts(): Promise<Product[]>
  getProductById(id: number): Promise<Product | null>
  getProductsByName(name: string): Promise<Product[]>
  getProductsByPrice(order: string): Promise<Product[]>
  getProductsByAlphabet(order: string): Promise<Product[]>
}

export { IProductService }

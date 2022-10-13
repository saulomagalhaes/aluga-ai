import { Request, Response } from 'express'
import { IProductService } from '../interfaces/IProductService'

class ProductController {
  constructor(private _productService: IProductService) {}

  public getAllProducts = async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    const products = await this._productService.getAllProducts()
    res.status(200).json(products)
  }

  public getProductById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const id = Number(req.params.id)
    const product = await this._productService.getProductById(id)
    res.status(200).json(product)
  }

  public getProductsFiltered = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const query = req.query as { [key: string]: string }
    if (query.name) {
      const products = await this._productService.getProductsByName(query.name)
      res.status(200).json(products)
    }
    if (query.price) {
      const products = await this._productService.getProductsByPrice(
        query.price
      )
      res.status(200).json(products)
    }
    if (query.alphabet) {
      const products = await this._productService.getProductsByAlphabet(
        query.alphabet
      )
      res.status(200).json(products)
    }
  }
}

export { ProductController }

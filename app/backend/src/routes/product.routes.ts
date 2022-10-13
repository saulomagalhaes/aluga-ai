import { Router } from 'express'
import { productController } from '.'

const router = Router()

router.get('/', (req, res) => productController.getAllProducts(req, res))
router.get('/product', (req, res) =>
  productController.getProductsFiltered(req, res)
)
router.get('/product/:id', (req, res) =>
  productController.getProductById(req, res)
)

export default router

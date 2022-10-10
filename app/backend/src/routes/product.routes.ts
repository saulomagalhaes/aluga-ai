import { Router } from 'express'
import { productController } from '.'

const router = Router()

router.get('/', (req, res) => productController.getAllProducts(req, res))
router.get('/products/:id', (req, res) =>
  productController.getProductById(req, res)
)

export default router

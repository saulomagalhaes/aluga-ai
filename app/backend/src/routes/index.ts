import { ProductController } from '../controllers/productController'
import { UserController } from '../controllers/userController'
import { ProductService } from '../services/productService'
import { UserService } from '../services/userService'

const userService = new UserService()
const userController = new UserController(userService)

const productService = new ProductService()
const productController = new ProductController(productService)

export { userController, productController }

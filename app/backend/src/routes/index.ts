import { ProductController } from '../controllers/productController'
import { SignatureController } from '../controllers/signatureController'
import { UserController } from '../controllers/userController'
import { ProductService } from '../services/productService'
import { SignatureService } from '../services/signatureService'
import { UserService } from '../services/userService'

const userService = new UserService()
const userController = new UserController(userService)

const productService = new ProductService()
const productController = new ProductController(productService)

const signatureService = new SignatureService()
const signatureController = new SignatureController(signatureService)

export { userController, productController, signatureController }

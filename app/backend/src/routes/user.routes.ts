import { Router } from 'express'
import { userController } from '.'

const router = Router()

router.post('/login', (req, res) => userController.login(req, res))
router.post('/register', (req, res) => userController.register(req, res))
router.get('/authorization', (req, res) =>
  userController.authorization(req, res)
)

export default router

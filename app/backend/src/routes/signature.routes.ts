import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import { signatureController } from '.'

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    )
  },
})
const upload = multer({ storage })

router.get('/:id', (req, res) => signatureController.signatures(req, res))
router.post('/checkout', upload.single('arquivo'), (req, res) =>
  signatureController.checkout(req, res)
)

export default router

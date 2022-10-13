import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import errorHandler from './middlewares/errorHandler'
import productRouter from './routes/product.routes'
import signatureRouter from './routes/signature.routes'
import userRouter from './routes/user.routes'
import swaggerDocument from './swagger.json'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/upload', express.static('uploads'))
app.use('/images', express.static('public/images'))
app.use('', userRouter)
app.use('', productRouter)
app.use('/signature', signatureRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(errorHandler)

export default app

import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import errorHandler from './middlewares/errorHandler'
import userRouter from './routes/user.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('', userRouter)

app.use(errorHandler)

export default app

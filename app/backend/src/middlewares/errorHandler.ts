import { ErrorRequestHandler } from 'express'

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { name, message } = err
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: err.details[0].message })
      break
    case 'UnauthorizedError':
      res.status(401).json({ message })
      break
    case 'NotFound':
      res.status(404).json({ message })
      break
    case 'ConflictError':
      res.status(409).json({ message })
      break
    case 'JsonWebTokenError':
      res.status(401).json({ message: 'Token must be a valid token' })
      break
    default:
      res.status(500).json({ message })
      break
  }
}

export default errorMiddleware

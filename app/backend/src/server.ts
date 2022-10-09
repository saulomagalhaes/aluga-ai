import 'dotenv/config'
import app from './app'

const port = process.env.API_PORT || 3001
app.listen(port, () => console.log('Rodando na porta:', port))

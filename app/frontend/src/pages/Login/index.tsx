import axios from 'axios'
import { useState } from 'react'
import { ContainerLogin } from './styles'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const saveUser = (value: string) =>
    localStorage.setItem('token', JSON.stringify(value))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios
      .post(`http://${URL}:${PORT}/login`, {
        email,
        password,
      })
      .then((response) => {
        saveUser(response.data.token)
      })
      .catch((error) => {
        setError(error.response.data.message)
      })
  }

  return (
    <ContainerLogin>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"> Senha </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>{error}</p>
      </form>
    </ContainerLogin>
  )
}

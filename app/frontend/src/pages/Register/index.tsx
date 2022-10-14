import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoAllugator from '../../assets/logotype.png'
import { ContainerRegister } from './styles'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const saveUser = (value: string) =>
    localStorage.setItem('token', JSON.stringify(value))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios
      .post(`http://${URL}:${PORT}/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        saveUser(response.data.token)
        navigate('/user')
      })
      .catch((error) => {
        setError(error.response.data.message)
      })
  }

  return (
    <ContainerRegister>
      <form onSubmit={handleSubmit}>
        <img src={logoAllugator} alt="" />
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Cadastrar</button>
        <p>{error}</p>
      </form>
    </ContainerRegister>
  )
}

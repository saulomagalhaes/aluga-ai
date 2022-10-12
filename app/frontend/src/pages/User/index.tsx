import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLogged } from '../../components/HeaderLogged'
import { Products } from '../../components/Products'

const URL = import.meta.env.VITE_HOSTNAME
const PORT = import.meta.env.VITE_BACKEND_PORT

export function User() {
  const navigate = useNavigate()
  useEffect(() => {
    const url = `http://${URL}:${PORT}/authorization`

    if (!localStorage.getItem('token')) {
      return navigate('/login')
    }
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token') || ''),
      },
    }
    axios
      .get<{ id: string }>(url, config)
      .then((_response) => {
        return
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      <HeaderLogged />
      <Products />
    </>
  )
}
